import { Component, OnInit } from '@angular/core';

import { ComponentesProductComponent } from 'src/app/componentes-product/componentes-product.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.less']
})
export class CarritoComponent implements OnInit {

  precio: number;

  constructor() {
    // this.precio = componentesProductComponent.getPrecio();
  }

  ngOnInit(): void {
  }

}
