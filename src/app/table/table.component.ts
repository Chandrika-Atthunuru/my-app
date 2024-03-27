import { Component, ɵconvertToBitFlags } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products:any=[
    {Productname:"pen",Price:10,Rating:3,FreeDelivery:true},
    {Productname:"phone",Price:100,Rating:2,FreeDelivery:false},
    {Productname:"shirt",Price:400,Rating:4,FreeDelivery:true},
    {Productname:"cap",Price:200,Rating:5,FreeDelivery:false},
    {Productname:"mobile case",Price:300,Rating:2,FreeDelivery:true},
    {Productname:"remote",Price:400,Rating:2.5,FreeDelivery:false}
  ]
  public product:any={
    Productname:"",
    Price:0,
    Rating:0,
    FreeDelivery:false
  }
  public isEdit:boolean=false;
  public i:number=0;
  update(selectedproduct:any,i:number){
    this.isEdit=true;
    this.i=i;
  this.product={...selectedproduct};
  }
  edit(){
    this.products.splice(this.i,1,{...this.product});
  }
  create(){
    this.products.push({...this.product});
    alert("created successfully");
    this.product.Productname="";
    this.product.Price=0;
    this.product.Rating=0;
    this.product.FreeDelivery=false
  }
  delete(i:number){
    this.products.splice(i,1);
  }
   public term:string="";
  store(){
   this.products=this.products.filter((product: any)=>product.Productname.includes(this.term));
   }
   button(){
    this.products=this.products.filter((product:any)=>product.FreeDelivery==true);
   }
   button1(){
    this.products=this.products.sort((a:any,b:any)=>a.Price-b.Price);
   }
   button2(){
    this.products=this.products.sort((a:any,b:any)=>b.Price-a.Price);
   }
   button3(){
    this.products=this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
   }
   button4(){
    this.products=this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
   }
   button5(){
    this.products=this.products.map((product:any)=>{
      product.Price=product.Price*0.5;
      return product;
    })
   }
   button6(){
    this.products=this.products.map((product:any)=>{ product.Price=product.Price+30;
    return product;
    })
    }
    button7(){
      alert(this.products.reduce((sum:any,product:any)=>sum+product.Price,0))
    }
    button8(){
      alert(this.products.length);
    }

          
}
