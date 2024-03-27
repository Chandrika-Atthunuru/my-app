import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
  public userform:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city:new FormControl(),
      pin:new FormControl()
    }),
    cards: new FormArray([]),
    daysscholor:new FormControl(),
    residential:new FormControl()
  })
  public option1=false;
  public potion2=false;
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray; 
  }
   add(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl()
      })
    )
   } 
  
   delete(i:number){
    this.cardsFormArray.removeAt(i);
   }
  
 submit(){
console.log(this.userform);
 }
}
