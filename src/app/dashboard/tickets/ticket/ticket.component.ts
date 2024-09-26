import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required: true}) ticketData!: Ticket;
  isDetailsVisible = signal(false);
  @Output() markAsDone = new EventEmitter();

  constructor(
    private ticketsService: TicketService
  ) {}

  toggleDetailVisibility() {
    this.isDetailsVisible.set(!this.isDetailsVisible());
  }

  markTicketAsComplete() {

    this.ticketsService.markAsComplete(this.ticketData.id);
    this.markAsDone.emit();
  }
}
