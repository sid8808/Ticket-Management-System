import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  currentTicket = null;
  message = '';

  constructor (private UserService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.message = '';
      this.getTicket(this.route.snapshot.paramMap.get('id'));
  }

  getTicket(id): void {
    this.UserService.get(id).subscribe(
      data => {
        this.currentTicket = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTicket.title,
      description: this.currentTicket.description,
      published: status
    };

    this.UserService.update(this.currentTicket.id, data).subscribe(
      response => {
        this.currentTicket.published = status;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateTicket(): void {
    this.UserService.update(this.currentTicket.id, this.currentTicket).subscribe(
      response => {
        console.log(response);
        this.message = "The Ticket was updated successfully!";
      },
      error => {
        console.log(error);
      }
    );
  }

  // deleteTicket(): void {
  //   this.UserService.delete(this.currentTicket.id).subscribe(
  //     response => {
  //       console.log(response);
  //       this.router.navigate(['./tickets']);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
