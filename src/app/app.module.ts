import { BrowserModule } from '@angular/platform-browser';
import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { EditcompanyComponent } from './components/admin/editcompany/editcompany.component';
import { ManageusersComponent } from './components/admin/manageusers/manageusers.component';
import { CouponComponent } from './components/admin/coupon/coupon.component';
import { AddcouponComponent } from './components/admin/coupon/addcoupon/addcoupon.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    ForbiddenComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    AddCompanyComponent,
    GetCompanyComponent,
    EditcompanyComponent,
    ManageusersComponent,
    CouponComponent,
    AddcouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,


  ],
  
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
