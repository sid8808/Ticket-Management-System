import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tickets: any;
    currentTicket = null;
    currentIndex = -1;
    title = '';

    constructor (private UserService: UserService) { }

    ngOnInit(): void {
        this.retrieveTicket();
    }

    retrieveTicket(): void {
      this.UserService.getAll().subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        },
        error => {
          console.log(error);
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
      this.UserService.findByTitle(this.title).subscribe(
        data => {
          this.tickets = data;
        },
        error => {
          console.log(error);
        }
      );
    }
}
