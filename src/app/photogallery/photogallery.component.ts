import { Component } from '@angular/core';
import { PhotogalleryService } from '../photogallery.service';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent {
public photosgallery:any=[];
constructor(private _photogalleryService:PhotogalleryService){
_photogalleryService.getphotogallery().subscribe(
  (data:any)=>{
    this.photosgallery=data.data.memes
  },
  (err:any)=>{
    alert("internal server error")
  }
)
}
}
