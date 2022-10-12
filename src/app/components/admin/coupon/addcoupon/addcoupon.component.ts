import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/Model/Coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.css']
})
export class AddcouponComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Coupon>();
  
  listCoupons:Coupon[];
  coupon:Coupon;
  showAdd = false;
   show=false;
  myid:number;

  constructor(private ac:ActivatedRoute, private couponServ:CouponService) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=> this.myid=(Number(next.get("id"))))
    console.log(this.myid)
      this.myForm=new FormGroup({
      idCoupon:new FormControl(),
      code: new FormControl(),
      productName: new FormControl(),
      dateD: new FormControl(),
      dateF :new FormControl(this.myid, Validators.required)
   
    }) 

  }

 

  showForm(){
    this.showAdd=true;
  }
  addCoupon(i:Coupon){
    this.listCoupons.push(i);
      }

  add(){
    this.couponServ.addcoupon(this.myForm.value,this.myid).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }


     
}