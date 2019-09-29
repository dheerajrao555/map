
import { Injectable } from '@angular/core';
import { Registration } from './login/register';

@Injectable()
export class SessionService {

    currentUser: Registration;

    constructor() { }

    setCurrentUser(data: Registration) {
        this.currentUser = data;
       let x= localStorage.setItem("user", JSON.stringify(data));
    }

    getCurrentUser() {
        var data = localStorage.getItem("user");
        if (data)
            this.currentUser = JSON.parse(data);
        return this.currentUser;
    }

    isLoggedIn() {
        var data = localStorage.getItem("user");
        if (data)
            this.currentUser = JSON.parse(data);
        if (this.currentUser == null)
            return false;
        else
            return true;
    }

    logout() {
        this.currentUser = null;
        localStorage.clear();
    }
}
