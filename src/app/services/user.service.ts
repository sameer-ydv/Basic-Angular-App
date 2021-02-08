import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Gamel',
        email: 'john@gmail.com',
        isActive: false,
        registered: new Date('12/9/1999 06:30:00'),
        hide: true
    },
    {
      firstName: 'Saurav',
      lastName: 'Sayana',
      email: 'saurav@yahoo.com',
      isActive: true,
      registered: new Date('12/4/1999 06:30:00'),
      hide: true
  },
  {
    firstName: 'Aman',
    lastName: 'Rathi',
    email: 'aman@rediffmail.com',
    isActive: false,
        registered: new Date('11/4/1999 06:30:00'),
        hide: true
  }
    ];
  }

  getUsers(): User[] {
    console.log('Service in Use');
    return this.users;
  }

  addUser(user:User){
    this.users.unshift(user);
  }

}
