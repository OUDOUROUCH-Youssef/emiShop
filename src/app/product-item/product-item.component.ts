import { Component, Input } from '@angular/core';
import { Product } from '../module/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item !:Product;

  constructor(private router:Router){}

  showDetails(id:number) {
    const navigationExtras = {
      state: {
        id:id
      }
    };
    this.router.navigate(['/details'],navigationExtras)
  }
}
