import {Injectable} from '@angular/core';
import login from '../../assets/data/login.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isValidUser(username: string, password: string): boolean {
    let us: any;
    login.find(user => us = user);
    return us !== undefined && us.username === username &&
      us.password === password;
  }
}
