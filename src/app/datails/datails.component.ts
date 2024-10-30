import { Component, OnInit } from '@angular/core';
import { Product } from '../module/Product';
import { HttpClient } from '@angular/common/http';
import { ServiceEmiShop } from '../services/serviceEmishop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datails',
  standalone: true,
  imports: [],
  templateUrl: './datails.component.html',
  styleUrl: './datails.component.css'
})
export class DatailsComponent implements OnInit{
  id!:number;
  product!:Product;

  constructor(private service:ServiceEmiShop, private route:ActivatedRoute){}
  
  ngOnInit(): void {
      this.route.paramMap.subscribe(()=>{
        this.id=history.state.id;

        this.service.showDetails(this.id).subscribe((data:any)=>{
           this.product=data;
  
        })
      })
      
  }
  
}
