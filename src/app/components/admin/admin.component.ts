import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Company } from 'src/app/Model/Company';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ListCompanies:Company[];
  
  message;
  show:true;
  showedit: boolean=true;
  Company:Company;

  constructor(private userServ:UserService, private companyServ:CompanyService) { }
  searchVal="";


  ngOnInit() {
    this.forAdmin();
    this.getliste();
  }
forAdmin(){
  this.userServ.forAdmin().subscribe(
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

deleteTravel(id:number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        
        'Deleted!',
        'Your file has been deleted.',
        'success',
        
      )
      this.companyServ.deleteCompanyById(id).subscribe(()=>this.companyServ.getAllTravelssFromServer()
      .subscribe(res=>{this.ListCompanies=res})
    );
    }
  })
}



addOpportunity(i:Company){
  this.ListCompanies.push(i);
    }

    editCompany(x:Company){
      this.show=true;
      this.Company=x;
      this.showedit=false;
    }
    editMyCompany(i :any){
  
    }
   
   
}
