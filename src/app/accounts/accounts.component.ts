import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
 public accounts:any=[];
 public accname:string="";
 public column:string="";
 public order:string="";
 public pageno:string="";
  constructor(private _accountsService:AccountsService){
   _accountsService.getaccounts().subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }
  filteracc(){
    this._accountsService.getfilteraccounts(this.accname).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sortaccount(){
   this._accountsService.getsortedaccounts(this.column,this.order).subscribe(
       (data:any)=>{
        this.accounts=data;
       },
       (err:any)=>{
        alert("internal server error")
       }
   )
  }
  paginationacc(){
    this._accountsService.getpagedaccounts(this.pageno).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  deleteacc(id:string){
    this._accountsService.deletedaccounts(id).subscribe(
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
