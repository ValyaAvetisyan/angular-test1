import { Injectable } from '@angular/core';
import users from '../../assets/data/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserList(): any {
    if (users && users.length !== 0) {
      console.log('userssssssssssssss', users);
      return users;
    }
    return [];
  }
}
