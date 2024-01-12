import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosDetailsComponent } from './productos-details/productos-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: 'details/:id',
      component: ProductosDetailsComponent,
      title: 'ProductosDetails'
    }
  ];
  
  export default routeConfig;