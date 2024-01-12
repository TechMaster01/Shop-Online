import { Injectable } from '@angular/core';
import { IProductos } from './iproductos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = 'https://fakestoreapi.com/products/';

  async getAllProductos(): Promise<IProductos[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductosById(id: number): Promise<IProductos | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  constructor() { }
}

