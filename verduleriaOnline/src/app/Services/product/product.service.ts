import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { map, take } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];
  url = 'api/mostrarProductos.php';

  constructor(private http: HttpClient) {
    // this.products = PRODUCTS;
  }
  public getAllProducts(): Product[]{
    return this.products;
  }
  // public getproductbyid(id: string): Product{
   //  return this.products.find((product: Product) => product.idProducto === id);
 // }

  public getProductsBD(): Observable<any>{
     
    return this.http.get<any>('http://localhost:8080/mostrarProductos.php');
  }

  
  ngOnInit(): void {
    
  }
}
