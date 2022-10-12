import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../Model/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  listCoupons : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private http : HttpClient) { }

  GetCouponBycompanyId(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:8089/retrieve-Company-coupon/"+id);
    }
  
    deleteCouponById(id:number,idCompany:number){
      return this.http.delete(" http://localhost:8089/removeCoupon/"+id+"/"+idCompany);
      }
  
      addcoupon (coupon: Coupon,idCompany:number): Observable<Coupon> {
        return this.http.post<Coupon>("http://localhost:8089/add-coupon/"+idCompany,coupon,this.httpOptions);
    }
   
}
