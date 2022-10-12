import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  listCompanies : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }

  getAllTravelssFromServer(): Observable<Company[]> {
     
    return this.myHttp.get<Company[]>('http://localhost:8089/retrieve-all-companies');
  }

  deleteCompanyById(id:number){
    return this.myHttp.delete("http://localhost:8089/remove-company/"+id);
    }

    addCompany(company:Company):Observable<Company>{
      return this.myHttp.post<Company>("http://localhost:8089/add-company",company,this.httpOptions);
      }


      getCompanyById(idCompany:number):Observable<Company>{
        return this.myHttp.get<Company>("http://localhost:8089/retrieve-company/"+idCompany);
        }
  
 
        updateCompany (idCompany: number, company: Company): Observable<Company> {
         return this.myHttp.put<Company>("http://localhost:8089/modify-company-byID/"+idCompany, company, this.httpOptions);
         }



}
