import { Injectable } from '@angular/core';
import { ticket } from './model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: ticket[] = []

  constructor() { }

  getTickets() {

    return this.tickets;
  }

  addTicket(ticketData: ticket) {

    this.tickets.push(ticketData);
  }
}
