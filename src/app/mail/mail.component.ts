import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  public mailsdata:any=[];
  constructor(private _mailService:MailService){
  _mailService.getmail().subscribe(
    (data:any)=>{
      this.mailsdata=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
  }

}
