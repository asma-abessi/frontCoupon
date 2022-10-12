import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Model/Company';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchVal="";
  ListCompanies:Company[];
message;
  constructor(private userServ:UserService, private companyServ:CompanyService) { }

  ngOnInit() {
    this.forUser();
    this.getliste();
  }
forUser(){
  this.userServ.forUser().subscribe(
    (res)=>{
      console.log(res)
      this.message = res;
    },
    (error)=>{
      console.log(error);
    }
  )
}

private getliste(){
  this.companyServ.getAllTravelssFromServer().subscribe(res=>{
    this.ListCompanies=res;
  
});
}
}
