import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/Model/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {

  company = new Company();
  link:SafeResourceUrl;
  showmap=false;
  TextBtn="afficher la Localisation"
  destination:string

  constructor(private ac:ActivatedRoute,public sanitizer: DomSanitizer,private companyServ :CompanyService) { }
  toggleMap(){
    this.showmap=!this.showmap
    if(this.showmap)
    this.TextBtn="Fermer la Localisation"
    else{
      this.TextBtn="Afficher la Localisation"
    }
  }
  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=>this.companyServ.getCompanyById(Number(next.get('id'))).subscribe(res=>
      {this.company=res,
        this.link=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDX-nRJ8JxhkpsCsD_-7qGO1vgGtRfMWG4&q="+this.company.adresse)
      }))
  }

}