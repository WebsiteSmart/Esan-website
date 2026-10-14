import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../core/services/business.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html'
})
export class WhatsappButtonComponent {
  private readonly businessService = inject(BusinessService);
  readonly business = this.businessService.info;
}
