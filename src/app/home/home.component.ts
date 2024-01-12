import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from '../productos/productos.component';
import { IProductos } from '../iproductos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ProductosList: IProductos[] = [];
  ProductosService: ProductosService = inject(ProductosService);
  filteredLocationList: IProductos[] = [];

  constructor() {
    this.ProductosService.getAllProductos().then((ProductList: IProductos[]) => {
      this.ProductosList = ProductList;
      this.filteredLocationList = this.ProductosList;
    })
  }

  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.ProductosList;
      return;
    }

    this.filteredLocationList = this.ProductosList.filter(Productos => Productos?.category.toLowerCase().includes(text.toLowerCase()));
  }
}
