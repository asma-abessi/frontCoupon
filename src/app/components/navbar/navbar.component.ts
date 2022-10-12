import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthServ:UserAuthService,public userServ:UserService, private router:Router) { }

  ngOnInit() {
  }
public isLoggedIn(){
  return this.userAuthServ.isLoggedIn();
}
public logout(){
   this.userAuthServ.clear();
   this.router.navigate(["/home"]);
}
}

