import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
   public rd:number=0;
   public Result:number=0;
   Area(){
    this.Result=Math.PI *this.rd * this.rd;
   }
   Perimeter(){
    this.Result=2*Math.PI *this.rd;
   }
}
