import { Product } from './../module/Product';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ServiceEmiShop{
    constructor(private http:HttpClient){}
    public getAllProduct():Observable<Product[]>{
        return this.http.get<Product[]>('https://dummyjson.com/products');
    }

    public searchProduct(searchTerm:String):Observable<Product[]>{
        return this.http.get<Product[]>('https://dummyjson.com/products/search?q='+searchTerm);
    }

    public showDetails(id:number):Observable<Product>{
        return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
    }
}