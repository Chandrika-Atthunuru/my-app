import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
   public age:number =20;
   public name:string="chandu";
   public isIndian:boolean=true;
   public ages:number[]=[10,20,30,40];
   public names:string[]=["chandu","sushma","sai"];
   public states:string[]=["Ap","Ts","Tn"];
   public cities:string[]=["Hyd","Vij","Khm"];
   public products:any=[
    {name:"pen",price:10},
    {name:"phone",price:10000},
    {name:"laptop",price:50000}
   ]
   public emps:any=[
    {name:"a",exp:2,package:6},
    {name:"b",exp:3,package:7},
    {name:"c",exp:4,package:8},
    {name:"d",exp:5,package:9},
   ]

   submit(){
    alert('submitted')
   }
   store(){
    alert('stored')
   }
   public phone:string="+80";
}
