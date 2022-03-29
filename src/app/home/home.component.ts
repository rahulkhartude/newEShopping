import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService: ServiceService) { }

  ngOnInit(): void {

  }
  allProduct:any
  allProductArray:any[]=[]
  allProductMethod(){
    this.myService.getProduct().subscribe(val=>{
       this.allProduct=val
       this.allProductArray=this.allProduct.products
      console.log(this.allProductArray)
    })

  }

}
