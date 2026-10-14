import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private readonly businessService = inject(BusinessService);
  readonly business = this.businessService.info;

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/esan-storefront.png';
  }
}
