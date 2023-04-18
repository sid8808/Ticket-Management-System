import { Component, OnInit } from '@angular/core';
import { TicketApi } from './utils/Api';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly ticketsApi: TicketApi, private readonly router: Router) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof ActivationEnd) {
        const token = e.snapshot.queryParams["access_token"] || sessionStorage.getItem("access_token") || undefined;
        console.log(token, e);

        if (token) {
          sessionStorage.setItem("access_token", token)
          this.ticketsApi.verifyUser(token).subscribe(
            () => {
              console.log("test");

              this.router.navigate(["/home"])
            }
          );
        } else {
          if (e.snapshot.url.length)
            this.router.navigate([""])
        }

      }
    })

  }
  title = 'Ticket';
}
