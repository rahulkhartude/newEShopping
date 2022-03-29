import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

productsApi="http://interviewapi.ngminds.com/api/getAllProducts"
  constructor(private http: HttpClient) { }
  getProduct(){

  return this.http.get(this.productsApi)
  
}


}
