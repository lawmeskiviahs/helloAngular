import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { TicketService } from '../ticket.service';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../model/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [SubmitButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') ticketForm?: ElementRef<HTMLFormElement>;
  @Output() submitTicket = new EventEmitter<{title: string, request: string}>();

  enteredTitle: string = '';
  enteredRequest: string = '';

  constructor(
  ) {}

  submitForm(): void {

    this.submitTicket.emit({
      title: this.enteredTitle,
      request: this.enteredRequest
    });
    // this.ticketForm?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
