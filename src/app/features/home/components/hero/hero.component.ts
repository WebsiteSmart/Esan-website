import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  private readonly businessService = inject(BusinessService);
  readonly business = this.businessService.info;

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/esan-storefront.png';
  }

  scrollToCollections(event: Event): void {
    event.preventDefault();
    const element = document.querySelector('#collections');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
