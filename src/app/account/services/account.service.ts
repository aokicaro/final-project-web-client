import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable()
export class AccountService {
    constructor( private http: HttpClient) {}
    
    userRegistration(user: User) {

    }

    login(user: User) {
        
    }
}