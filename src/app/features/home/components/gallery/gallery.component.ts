import { Component, signal, inject, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';
import { GalleryPhoto } from '../../../../core/models/business.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  readonly businessService = inject(BusinessService);
  readonly photos = this.businessService.galleryPhotos;

  readonly selectedFilter = signal<string>('All');
  readonly activePhoto = signal<GalleryPhoto | null>(null);

  readonly filterTabs = [
    'All',
    'In-Store Stock',
    'Denim & Pants',
    'Shirts',
    'Exterior'
  ];

  readonly filteredPhotos = computed(() => {
    const filter = this.selectedFilter();
    const all = this.photos();

    if (filter === 'All') return all;
    if (filter === 'In-Store Stock') return all.filter(p => p.isRealStock);
    if (filter === 'Denim & Pants') return all.filter(p => p.category.includes('Pants') || p.category.includes('Trousers') || p.category.includes('Denim'));
    if (filter === 'Shirts') return all.filter(p => p.category.includes('Shirt'));
    if (filter === 'Exterior') return all.filter(p => p.isStorefront);
    return all;
  });

  setFilter(tab: string): void {
    this.selectedFilter.set(tab);
  }

  openLightbox(photo: GalleryPhoto): void {
    this.activePhoto.set(photo);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.activePhoto.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.activePhoto()) {
      this.closeLightbox();
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/esan-storefront.png';
  }
}
