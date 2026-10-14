import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  private readonly businessService = inject(BusinessService);
  readonly business = this.businessService.info;
  readonly reviews = this.businessService.reviews;
}
