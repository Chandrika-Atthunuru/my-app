import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-form-ex',
  templateUrl: './create-user-form-ex.component.html',
  styleUrls: ['./create-user-form-ex.component.css']
})
export class CreateUserFormExComponent {
public userform:FormGroup=new FormGroup({
  name:new FormControl(),
  experiences:new FormControl(),
  experience:new FormGroup(
    {
    company:new FormControl(),
    experience:new FormControl(),
    package:new FormControl()
  }
  ),
  Skills:new FormArray([]),
})
get SkillsFormArray(){
  return this.userform.get('Skills') as FormArray
}
add(){
  this.SkillsFormArray.push(
    new FormGroup({
      name:new FormControl(),
      rating:new FormControl(),
      experience: new FormControl()
    })
  )
}
submit(){
  console.log(this.userform.value)
}
delete(i:number){
    this.SkillsFormArray.removeAt(i);
}
}
