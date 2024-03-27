import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
   public cars:any=[
    {name:"Honda",path:"https://media.zigcdn.com/media/content/2023/Jan/cover_63bd2bc9677df.jpg"},
    {name:"BMW",path:"https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwY2FyfGVufDB8fDB8fHww"},
    {name:"Audi",path:"https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80"}
  ]

   public selectedimage:string='';
                       
}
