import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/Model/Coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  showAdd = false;
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Coupon>();
  
  listCoupons:Coupon[];
  searchVal:"";
  myParam:number;
  coupons:any;
 id:number;

  constructor(private ac:ActivatedRoute, private couponServ:CouponService,public userServ:UserService,private router:Router) { }


  ngOnInit(): void {

    this.ac.paramMap.subscribe(next=> this.id=(Number(next.get("id"))))
    console.log(this.id)
      this.myForm=new FormGroup({
      idCoupon:new FormControl(),
      code: new FormControl(),
      productName: new FormControl(),
      dateD: new FormControl(),
      dateF :new FormControl(this.id, Validators.required)
   
    }) 

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.GetcouponByCompanyId(this.myParam)
       });

      
    
  }

  GetcouponByCompanyId(id){
    this.couponServ.GetCouponBycompanyId(id).subscribe(res=>{
      this.listCoupons=res
      console.log(this.listCoupons);
    }); 
  }

  


  deletecoupon(id:number){
    this.couponServ.deleteCouponById(id,this.id).subscribe(()=>this.couponServ.GetCouponBycompanyId(this.id)
      .subscribe(res=>{this.listCoupons=res})
    );

  }

  showForm(){
    this.showAdd=true;
  }
  addCoupon(i:Coupon){
    this.listCoupons.push(i);
      }

     
      
      
  }
