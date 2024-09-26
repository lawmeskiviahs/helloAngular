import { Component, OnInit } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketService } from './ticket.service';
import { Ticket } from './model/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: {
    id: 'new-ticket'
  }
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService
  ) {

  }

  getTicketsData(): void {

    this.tickets = this.ticketService.getTickets;
  }

  ngOnInit(): void {
    
    this.getTicketsData();
  }

  addTicket(ticketData: {title: string, request: string}): void {

    this.ticketService.addTicket(ticketData.title, ticketData.request);
    this.getTicketsData();
    console.log(this.tickets);
  }
}
