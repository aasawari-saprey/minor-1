import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fname=""
   age="";
   email="";
   weight="";
   height="";
   result="";
   BMI = "";
   Gender : string[]= ['M','F','B'];
   value = "";
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.dataservice.getItemId(this.dataservice.dataService)
    .subscribe((res : any)=>{
      console.log(res);
      
      this.result=res;
      this.fname=res[0].name;
      this.email=res[0].email;

    })
     
    console.log(this.result);
  }
  
   Submit(){
    const data={
      email : this.email,
      fname : this.fname,
      age : String(this.age),
      height :String(this.height),
      weight :String(this.weight),
      gender : this.value,      
      BMI : this.BMI
    }
     console.log(data);
     this.dataservice.completeProfile(data)
     .subscribe((res)=>{
       console.log(res);
     })
   }

   Calculate (data1 : any , data2 : any){
     let BMI = data1 /(data2/100*data2/100);
     this.BMI = String(BMI.toFixed(2));
   }
}
