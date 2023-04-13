import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  sellerSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/user',data)
  }
}
