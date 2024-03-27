import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
   public Number1:number=0;
   public Number2:number=0;
   public Result:number=0;

   sum(){
    this.Result=this.Number1+this.Number2;
   }
   mul(){
    this.Result=this.Number1*this.Number2
   }
}
