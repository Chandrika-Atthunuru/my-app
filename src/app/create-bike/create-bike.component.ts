import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent {
  constructor(private _bikesService:BikesService){}
public BikeForm:FormGroup =new FormGroup(
  {
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    color:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    image:new FormControl(),

  }
)

submit(){
  console.log(this.BikeForm.value);
  this._bikesService.createbike(this.BikeForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");
      this.BikeForm.reset();
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
}

