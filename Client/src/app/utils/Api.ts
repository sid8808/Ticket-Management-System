import { HttpClient } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core"
import { iTicket } from "src/@types/Ticket";

@Injectable({
    providedIn: "root"
})
export class TicketApi {
    private readonly baseURL: string = "http://localhost:8080/api"
    constructor(private readonly httpService: HttpClient) { }
    getAllTicketsOfUser() {
        return this.httpService.get<iTicket[]>(this.baseURL + "/tickets")
    }
    createTicket(ticket: iTicket) {
        return this.httpService.post<iTicket[]>(this.baseURL + "/tickets", ticket)
    }
}