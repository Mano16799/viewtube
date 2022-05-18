import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData:any={}
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  register(name:string, mailId:string, pass:string){
    this.auth.register(name,mailId,pass)
    alert('signup succesful. please login to continue')
    this.router.navigate(['authenticate']);

  }

}
