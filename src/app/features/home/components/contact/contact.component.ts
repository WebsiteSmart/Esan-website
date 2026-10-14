import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../core/services/business.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private readonly businessService = inject(BusinessService);
  readonly business = this.businessService.info;
}
