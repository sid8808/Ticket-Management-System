// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms'
// import {Cat} from '../category-mock'

// interface Food {
//   value: string;
//   viewValue: string;
// }

// @Component({
//   selector: 'app-newticket',
//   templateUrl: './newticket.component.html',
//   styleUrls: ['./newticket.component.css']
// })
// export class NewticketComponent implements OnInit {
//   foods: Food[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'},
//   ];

//   Category = Cat;

//   CategoryValue !: FormGroup;

//   constructor(private formBuilder: FormBuilder){ }


//   ngOnInit(): void {
//     this.CategoryValue = this.formBuilder.group({
//       category:['']
//     })
//   }

//   changeCategory(e:any){
//     console.log(e.target.value)
//   }


// }
import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { TicketApi } from "../utils/Api";
import { iTicket } from "src/@types/Ticket";

@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})

export class NewticketComponent implements OnInit {
  // ticket = {
  //   title: '',
  //   description: '',
  //   published: false
  // };
  //submitted = false;

  ticket: iTicket = {
    title: "",
    subject: "",
    categories: "",
    description: "",

  }
  submitted: boolean = false;

  constructor(private readonly ticketsApi: TicketApi) { }

  ngOnInit(): void {
  }

  saveTicket(): void {
    const data = {
      title: this.ticket.title,
      description: this.ticket.description,
      categories: this.ticket.categories,
      subject: this.ticket.subject,
    };
    this.ticketsApi.createTicket(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  newTicket(): void {
    this.submitted = false;
    this.ticket = {
      title: '',
      description: '',
      published: false
    };
  }
}
