import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData:any={}
  constructor(private router: Router, private authService:AuthService, private breakpointObserver: BreakpointObserver) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
  }

  login(username: string, password:string) {
    if(this.authService.login(username,password)){
      alert('login sucessful')
      this.router.navigate(['/upload']);
    }
    else
    alert('no login details found')
  }
}
