import { Component, OnInit } from '@angular/core';
import { ServiceEmiShop } from '../services/serviceEmishop';
import { Product } from '../module/Product';
import { ProductItemComponent } from "../product-item/product-item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [ProductItemComponent, CommonModule, FormsModule]
})
export class ProductComponent implements OnInit{
  searchTerm!:String;
  list: Product[]=[];
  searchedProduct:Product[]=[];
  showedProduct:Product[]=[];
  constructor(private service:ServiceEmiShop){}

  ngOnInit(): void {
      this.service.getAllProduct().subscribe((data:any)=>{
        this.list=data.products;
      })
      this.showedProduct=this.list;
  }
  search(keyWord:String){
    this.service.searchProduct(keyWord).subscribe((data:any)=>{
      this.searchedProduct=data.products;
    })
    if(keyWord){
      this.showedProduct=this.searchedProduct;
    }
    else{
      this.showedProduct=this.list;
    }
  }

}
