import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private _httpClient:HttpClient) { }
// post
  createbike(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  // get
 getbikes():Observable<any>{
 return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
 }
 getfilterbikes(term:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
 }
 getpagedbikes(pageno:number):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+pageno);
 }
 getsortedbikes(column:string,order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
 }
//  delete
 deletebikes(id:string):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
 }
 loaddata(queries:any){
  let str="";
  if(queries.filter){
    str+="filter="+queries.filter+"&";
  }
  if(queries.pageno){
    str +="page="+queries.pageno+"&";
    str+="limit="+queries.limit+"&";
  }
  if(queries.sortBy){
    str +="sortBy="+queries.sortBy+"&";
  }
  if(queries.order){
    str +="order="+queries.order+"&";
  }
  console.log(queries,str);
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?"+str);
 }
}
