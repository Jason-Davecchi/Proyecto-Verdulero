import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-details-prduct-screen',
  templateUrl: './details-prduct-screen.component.html',
  styleUrls: ['./details-prduct-screen.component.less']
})
export class DetailsPrductScreenComponent implements OnInit {

  public product: Product;
  public id: string;
  public producto: Product[];


  constructor(
    private productService: ProductService,
    // tslint:disable-next-line: no-shadowed-variable
    private ActivatedRoute: ActivatedRoute) {
    this.id = ActivatedRoute.snapshot.params['id'];

  }


  ngOnInit(): void {
    this.productService.getProductsBD().subscribe(
      data => {
       // console.log(data.records);
        this.product = data.records;
        this.producto = data.records;
        this.product = this.producto.find((product: Product) => product.idProducto === this.id);
      }
    );
  }

  public asdasd(): void{
    console.log(this.product);
  }

}
