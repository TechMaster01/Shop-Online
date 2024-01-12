import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-productos-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-details.component.html',
  styleUrl: './productos-details.component.css'
})
export class ProductosDetailsComponent {
  title = 'ProductosDetails';
  @Input() Productos!: IProductos;

  route: ActivatedRoute = inject(ActivatedRoute);
  productosService = inject(ProductosService);
  productos: IProductos | undefined;

    constructor() {
        const ProductosId = Number(this.route.snapshot.params['id']);
        
        this.productosService.getProductosById(ProductosId).then(productos => {
          this.productos = productos;
        })
    }
}
