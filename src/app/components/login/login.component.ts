import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ:UserService,private userAuthServ: UserAuthService, private router: Router) { }

  ngOnInit():void {
  }
  login(loginForm: NgForm) {
    this.userServ.login(loginForm.value).subscribe(
      (response: any) => {
      //  console.log(response.jwtToken);
      //  console.log(response.user.role);
      this.userAuthServ.setRoles(response.user.role);
     this.userAuthServ.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
       if (role === 'Admin') {
          this.router.navigate(['/admin']);
       } else {
         this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

