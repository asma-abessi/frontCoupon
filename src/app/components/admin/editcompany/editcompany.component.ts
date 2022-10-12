import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/Model/Company';

import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {

  @Input() Company:Company = new Company();

  @Output() edited = new EventEmitter<Company>();

  myForm:FormGroup;
  constructor(private companyServ:CompanyService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      idCompany : new FormControl (this.Company.idCompany,Validators.required),
      name : new FormControl (this.Company.name,Validators.required),
      emailC : new FormControl (this.Company.emailC,Validators.required),
      adresse : new FormControl (this.Company.adresse,Validators.required),
      codeCoupon: new FormControl (this.Company.codeCoupon,Validators.required),
      website : new FormControl (this.Company.website,Validators.required),
      description : new FormControl (this.Company.description,Validators.required),
      phone : new FormControl (this.Company.phone,Validators.required),
      agentName : new FormControl (this.Company.agentName,Validators.required),
      country : new FormControl (this.Company.country,Validators.required),
      image : new FormControl (this.Company.image,Validators.required),
    }) 
  }
  
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){
    this.Company.idCompany = this.myForm.get('idCompany').value;
    let id = this.myForm.get('idCompany').value;
    this.Company.name = this.myForm.get('name').value;
    this.Company.emailC = this.myForm.get('emailC').value;
    this.Company.adresse = this.myForm.get('adresse').value;
    this.Company.codeCoupon = this.myForm.get('codeCoupon').value;
    this.Company.website = this.myForm.get('website').value;
    this.Company.description = this.myForm.get('description').value;
    this.Company.phone = this.myForm.get('phone').value;
    this.Company.agentName = this.myForm.get('agentName').value;
    this.Company.country = this.myForm.get('country').value;
    this.Company.image = this.myForm.get('image').value;
    console.log(this.Company);
  this.companyServ.updateCompany(id,this.Company).subscribe()

 this.reloadComponent();
  window.location.reload();
}



}