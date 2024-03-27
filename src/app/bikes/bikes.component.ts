import { Component } from '@angular/core';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
public term:string="";
public pageno:number=0;
public column:string="";
public order:string=""; 
public bikes:any=[];

public queries:any={
  filter:"",
  limit:10,
  pageno:0,
  sortBy:"",
  order:""
}

constructor(private _bikesService:BikesService){
 _bikesService.getbikes().subscribe(
  (data:any)=>{
    this.bikes=data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
 )
}
query(){
  this._bikesService.loaddata(this.queries).subscribe(
    (data:any)=>{
      this.bikes=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
filterbikes(){
  this._bikesService.getfilterbikes(this.term).subscribe(
    (data:any)=>{
      this.bikes=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
pagedbikes(){
  this._bikesService.getpagedbikes(this.pageno).subscribe(
  (data:any)=>{
    this.bikes=data;
  },
  (err:any)=>{
    alert("internal server error")
  }
  )
}
sortedbikes(){
  this._bikesService.getsortedbikes(this.column,this.order).subscribe(
    (data:any)=>{
      this.bikes=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
deletedbikes(id:string){
  this._bikesService.deletebikes(id).subscribe(
    (data:any)=>{
      alert("deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
}
