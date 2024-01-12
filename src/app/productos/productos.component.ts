import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProductos } from '../iproductos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() Productos!: IProductos;
}
