import { Injectable } from '@angular/core';
import { Ticket } from './model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = []

  constructor() { }

  get getTickets(): Ticket[] {

    return this.tickets;
  }

  prepareDataForSave(titleString: string, requestString: string): Ticket {

    const body: Ticket = {
      id: (this.tickets.length + 1).toString(),
      title: titleString,
      request: requestString,
      status: "open"
    }
    return body
  }

  addTicket(title: string, request: string): void {

    this.tickets.push(this.prepareDataForSave(title, request));
  }

  markAsComplete(id: string) {

    const selectedId = this.tickets.findIndex( (element) => element.id === id)
    this.tickets[selectedId].status = 'closed';
  }
}
