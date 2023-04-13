import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router'
import { SignUp } from '../data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user:UserService, private router: Router){}

    ngOnInit():void{}
    signUp(data:SignUp):void{
        this.user.sellerSignUp(data).subscribe((result)=>{
          if(result){
              this.router.navigate(['home'])
           }
        });
    }

}
