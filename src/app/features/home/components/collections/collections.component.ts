import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';
import { ClothingCategory } from '../../../../core/models/business.model';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html'
})
export class CollectionsComponent {
  private readonly businessService = inject(BusinessService);
  readonly categories = this.businessService.categories;

  getWhatsAppLink(category: ClothingCategory): string {
    return this.businessService.getWhatsAppLink(category.whatsappMessage);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/esan-storefront.png';
  }
}
