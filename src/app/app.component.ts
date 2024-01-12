import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, RouterModule ],
  template: `
<nav>
    <a [routerLink]="['/']"><img src="../assets/logo.svg" alt=""></a>
    <h1>Mi primera tienda online!</h1>
</nav>  
<section>
  <router-outlet></router-outlet>
</section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';
}
