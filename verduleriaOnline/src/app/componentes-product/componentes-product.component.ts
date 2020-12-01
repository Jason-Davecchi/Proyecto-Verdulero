import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HomeScreenComponent } from '../screens/home-screen/home-screen.component';

import { Product } from '../model/product.model';
import { from } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './componentes-product.component.html',
    styleUrls: ['./componentes-product.component.less']
})

// tslint:disable-next-line: class-name
export class ComponentesProductComponent implements OnInit{
  number: FormControl;
  cantidad: number;
  precioBase: number;

    @Input()
    public product: Product;

    @Output() id = new EventEmitter<string>();

  public setPrecio(precioBa: number): void{
    this.precioBase = precioBa * this.cantidad ;
    console.log(this.precioBase);
  }

  public getPrecio(): number{
    return this.precioBase;
  }

    // tslint:disable-next-line: typedef
    idset(idObtenida: string){
      this.id.emit(idObtenida);
     // console.log(idObtenida);
    }

    constructor(){
    }
    ngOnInit(
    ): void {}


}
