import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from 'src/app/Model/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Company>();
  company:Company;
  constructor(private companyServ : CompanyService) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
      idCompany:new FormControl(),
      name: new FormControl(),
      emailC: new FormControl(),
      adresse: new FormControl(),
      codeCoupon:new FormControl(),
      website:new FormControl(),
      description:new FormControl(),
      phone:new FormControl(),
			agentName:new FormControl(),
		    country:new FormControl()
    }) 
  }
  

  add(){
    this.companyServ.addCompany(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  console.log("mycompany"+this.company)
  //window.location.reload();
  }

}