import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TicketApi } from '../utils/Api';
import { iTicket } from 'src/@types/Ticket';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTicket = null;
  currentIndex = -1;
  title = '';
  public profilePicUrl: string = "https://www.pinkvilla.com/imageresize/chris_future_thor.jpg?width=752&t=pvorg";
  public firstName: string = "N/A";
  public lastName: string = "N/A";
  public email: string = "N/A";

  allUserTickets: iTicket[] = [];

  constructor(private readonly ticketsApi: TicketApi, private readonly currentRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.ticketsApi.getCurrentUserDetails().then(e => {
      // console.log(e);
      this.profilePicUrl = e["picture"];

      this.firstName = e["given_name"]
      this.lastName = e["family_name"]
      this.email = e["email"]

    }).catch(e => {
      this.router.navigate([""])
    })
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
