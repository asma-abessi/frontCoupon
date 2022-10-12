import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  searchVal:"";
  ListUsers:User[];
  constructor(private userServ:UserService) { }

  ngOnInit() {
    this.getliste();
  }
  private getliste(){
    this.userServ.getAllTravelssFromServer().subscribe(res=>{
      this.ListUsers=res;
    
  });
  }
}
