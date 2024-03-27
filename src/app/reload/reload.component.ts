import { Component } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent {
public activity:any=[];
constructor(private _reloadService:ReloadService){
  _reloadService.getactivity().subscribe(
    (data:any)=>{
      this.activity=data
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
reload(){
    this._reloadService.getactivity().subscribe(
      (data:any)=>{
        this.activity=data
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}


