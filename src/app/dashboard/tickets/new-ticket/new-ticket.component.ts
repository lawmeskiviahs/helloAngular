import { Component } from '@angular/core';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { TicketService } from '../ticket.service';
import { FormsModule } from '@angular/forms';
import { ticket } from '../model/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [SubmitButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  constructor(
    private ticketService: TicketService
  ) {}

  prepareTicketDataToSave(titleString: string, requestString: string): ticket {
    const body: ticket = {
      title: titleString,
      request: requestString
    }
    return body
  }

  submitForm(titleElement: HTMLInputElement, requestElement: HTMLTextAreaElement) {

    this.ticketService.addTicket(this.prepareTicketDataToSave(titleElement.value, requestElement.value));
    titleElement.value = '';
    requestElement.value = '';
  }
}
