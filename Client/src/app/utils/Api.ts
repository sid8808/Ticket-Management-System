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
    private currenUserDetails: Record<string, any> = {}
    getAllTicketsOfUser() {
        return this.httpService.get<iTicket[]>(this.baseURL + "/tickets", { headers: { Authorization: "Bearer " + sessionStorage.getItem("access_token") } })
    }
    createTicket(ticket: iTicket) {
        return this.httpService.post<iTicket[]>(this.baseURL + "/tickets", ticket, { headers: { Authorization: "Bearer " + sessionStorage.getItem("access_token") } })
    }
    verifyUser(token: string) {
        const t = this.httpService.get<iTicket[]>(this.baseURL + "/users/", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        t.subscribe(e => {
            this.currenUserDetails = e;
        })
        return t;
    }
    getCurrentUserDetails() {
        if (Object.keys(this.currenUserDetails).length) {
            return Promise.resolve(this.currenUserDetails)
        }
        return Promise.reject("User not logged In")
    }

}