import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TicketApi } from '../utils/Api';
import { iTicket } from 'src/@types/Ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTicket = null;
  currentIndex = -1;
  title = '';
  allUserTickets: iTicket[] = [];

  constructor(private readonly ticketsApi: TicketApi) { }

  ngOnInit(): void {
    this.retrieveTicket();
  }

  retrieveTicket(): void {
    this.ticketsApi.getAllTicketsOfUser().subscribe(
      data => {
        this.allUserTickets = data;
      }

    );
  }
  refreshList(): void {
    this.retrieveTicket();
    this.currentTicket = null;
    this.currentIndex = -1;
  }

  setActiveTicket(ticket, index): void {
    this.currentTicket = ticket;
    this.currentIndex = index;
  }

  // removeAllTicket(): void {
  //   this.UserService.deleteAll().subscribe(
  //     response => {
  //       console.log(response);
  //       this.retrieveTicket();
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  searchTitle(): void {
    // this.UserService.findByTitle(this.title).subscribe(
    //   data => {
    //     this.allUserTickets = data;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
