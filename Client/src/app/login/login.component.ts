import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router'
import { SignUp } from '../data-type';
import { Observable, Subscription } from 'rxjs';
import { TicketApi } from '../utils/Api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private allSubscriptions: Subscription[] = []
  constructor(private user: UserService, private router: Router, private readonly currentRoute: ActivatedRoute, private readonly Api: TicketApi) { }
  ngOnDestroy(): void {
    this.allSubscriptions.map(e => e.unsubscribe())
  }

  ngOnInit(): void {
    // this.allSubscriptions.push(this.currentRoute.queryParams.subscribe(e => {
    //   console.log(e);
    //   const accessToken = e["access_token"] || sessionStorage.getItem("access_token") || undefined
    //   if (accessToken) {
    //     this.Api.verifyUser(accessToken).subscribe(e => {
    //       console.log(e);

    //       sessionStorage.setItem("access_token", accessToken)
    //       // this.router.navigate(['home'])
    //     })
    //   } else {

    //     this.router.navigate([''])
    //   }

    // }))


  }
  signUp(data: SignUp): void {
    this.user.sellerSignUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['home'])
      }
    });
  }

}
