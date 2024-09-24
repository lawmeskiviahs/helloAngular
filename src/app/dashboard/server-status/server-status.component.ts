import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status'
  }
})
export class ServerStatusComponent implements OnInit, OnDestroy {

  currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  randomizeStatus() {
    this.interval = setInterval( () => {
      const random = Math.random();
      if( random < 0.5) {
        this.currentStatus = 'online'
      } else if ( random < 0.9 ) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 2000);
  }

  ngOnInit(): void {

    this.randomizeStatus();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
