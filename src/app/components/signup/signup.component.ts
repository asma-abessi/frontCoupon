import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<User>();
  user:User;
  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      userFirstName:new FormControl(),
      userLastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      userName: new FormControl(),
      userPassword: new FormControl()
    }) 
  }

 

  add(){
    this.userServ.addUser(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  console.log(this.myForm.value)
  this.myForm.reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your account has been saved',
    showConfirmButton: false,
    timer: 1500
  })
  }



}