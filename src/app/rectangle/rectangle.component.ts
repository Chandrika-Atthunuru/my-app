import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public num1:number=0;
  public num2:number=0;
  public Result:number=0;
  Area(){
    this.Result=this.num1*this.num2;
  }
  Perimeter(){
    this.Result=2*(this.num1+this.num2);
  }
}
