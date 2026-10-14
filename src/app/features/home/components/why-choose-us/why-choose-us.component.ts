import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html'
})
export class WhyChooseUsComponent {
  private readonly businessService = inject(BusinessService);
  readonly features = this.businessService.features;
}
