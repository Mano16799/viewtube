import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface user {
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogindetails: user[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('http://localhost:3000/user').subscribe(
      data=>this.userLogindetails = data
    )
  }

  isLoggedIn: boolean = false;


  login(name: string, pass: string): boolean {
    const foundUser = this.userLogindetails.filter(user=>user.email===name && user.password==pass)
    if(foundUser.length>0){
      this.isLoggedIn = true;
    }
    return this.isLoggedIn
  }


  logout() {
    this.isLoggedIn = false;
  }

  register(name: string, email: string, password: string) {
    var data: user = {
      username: name,
      email: email,
      password: password
    }
    this.httpClient.post<any>('http://localhost:3000/user', data).subscribe();
  }


}
