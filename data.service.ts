import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
//import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    dataService="";
  constructor(private http : HttpClient) { }
  


  getDataVegetarian(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=7e1c6e0fb06f4c4295c84f623986ce80&type=breakfast&diet=Vegetarian")
  }

  getDataVegan(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=7e1c6e0fb06f4c4295c84f623986ce80&type=breakfast&diet=Vegan")
  }

  getDataPaleo(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=7e1c6e0fb06f4c4295c84f623986ce80&type=breakfast&diet=Paleo")
  }

  getDataWhole(Diet : string) : Observable<any>{
    return this.http.get<any>("https://api.spoonacular.com/recipes/complexSearch?apiKey=7e1c6e0fb06f4c4295c84f623986ce80&type=breakfast&diet=Whole30")
  }
  

  getItemId(email: any) :  Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user/"+email);

   }
   


   createItem(data: any) :  Observable<any>{
    return this.http.post("http://localhost:3000/user",data);

   }

   completeProfile(data: any) :  Observable<any>{
    return this.http.post("http://localhost:3000/user/profile",data);

   }

   
}
