import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : any="";
  password : any='';
  result=[];
  dataService = "";
  

  constructor(private router : Router,private dataservice : DataService) { }

  ngOnInit(): void {
  }
  login(){
    var result : number;
    const loginData={
      email : this.email,
      password : this.password,
    }

    if(this.email == ""|| this.password== "")
     this.router.navigateByUrl("login");

     else{
      this.dataservice.getItemId(loginData.email)
      .subscribe((res : any)=>{
        console.log(res);
        //this.result=this.result + res.length;
        this.result = res;
        console.log(this.result.length);
         

        if(this.result.length < 1 || res[0].password != loginData.password){
          console.log("User don't exist");
          this.router.navigateByUrl("login"); 
         
       }
       else{
        //this.dataservice.getToaster();
        console.log("User exists");
        this.router.navigateByUrl("profile"); 
        this.dataservice.dataService=loginData.email;
        }
     })

    }

         
         
        
        
    
     
    
  }
}
