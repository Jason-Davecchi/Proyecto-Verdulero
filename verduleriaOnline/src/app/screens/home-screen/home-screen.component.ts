import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  public products: Product[];

  constructor(public productservice: ProductService){
    // this.products = this.productservice.getProductsBD();
    // console.log(this.products, 'QUe paso');
  }


  ngOnInit(): void {
    this.productservice.getProductsBD().subscribe(
      data => {
        // console.log(data.records);
        this.products = data.records;
      }
    );

  }

}

