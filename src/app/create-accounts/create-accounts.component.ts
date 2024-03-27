import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
constructor(private _accountsService :AccountsService){}
 public AccountForm:FormGroup= new FormGroup(
{
  account_name : new FormControl(),
  available_balance: new FormControl(),
  account_number : new FormControl(),
  city: new FormControl(),
  profie_picture : new FormControl(),
}
 )
 onsubmit(){
  console.log(this.AccountForm.value);
  this._accountsService.createaccount(this.AccountForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");
      this.AccountForm.reset();
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
 }
}
