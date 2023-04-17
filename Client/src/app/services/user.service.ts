import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../data-type';
import { Observable } from 'rxjs'
import { iTicket } from 'src/@types/Ticket';

const baseUrl = 'http://localhost:8080/api/tickets';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<iTicket[]> {
    return this.http.get<iTicket[]>(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id, data): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  // getData() {
  //   return this.http.get(`${baseUrl}/data`);
  // }
  sellerSignUp(data: SignUp) {
    return this.http.post('http://localhost:3000/user', data)

  }
}
