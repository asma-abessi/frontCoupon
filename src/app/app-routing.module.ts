import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';

import { AdminComponent } from './components/admin/admin.component';
import { AddcouponComponent } from './components/admin/coupon/addcoupon/addcoupon.component';
import { CouponComponent } from './components/admin/coupon/coupon.component';

import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { ManageusersComponent } from './components/admin/manageusers/manageusers.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'user',component:UserComponent , canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  
  {path:'signup',component:SignupComponent},
  {path:'addCompany',component:AddCompanyComponent},
  {path:"get/:id",component:GetCompanyComponent},
  {path:"manageusers",component:ManageusersComponent},
  {path:"company/:id",component:CouponComponent},
  {path:"coupon/:idcompany",component:AddcouponComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
