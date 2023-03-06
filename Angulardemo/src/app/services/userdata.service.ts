import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {Id:1,username:"harri",email:'srashti@gmail.com'},
      {Id:2,username:"herry",email:'srashti@gmail.com'},
      {Id:3,username:"jerry",email:'srashti@gmail.com'},
      {Id:4,username:"marie",email:'srashti@gmail.com'},

    ]
  }
}

