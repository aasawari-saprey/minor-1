import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse-food',
  templateUrl: './browse-food.component.html',
  styleUrls: ['./browse-food.component.css']
})
export class BrowseFoodComponent implements OnInit {

  constructor(private dataservice : DataService) { }
  data1 :any =[];
  data2 :any =[];
  data3 :any =[];
  data4 :any =[];
  
  selected : any;
  
  ngOnInit(): void {
    this.dataservice.getDataVegetarian(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data1[index] = res.results[index];
         }
    })

    this.dataservice.getDataVegan(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data2[index] = res.results[index];
         }
    })

    this.dataservice.getDataPaleo(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data3[index] = res.results[index];
         }
    })

    this.dataservice.getDataWhole(this.selected)
    .subscribe((res : any)=>{
      for (let index = 0; index < 6; index++) {
        this.data4[index] = res.results[index];
         }
    })
    //console.log(this.data1,this.data2,this.data3,this.data4)
    console.log(this.dataservice.dataService);
  }
  
    

}
