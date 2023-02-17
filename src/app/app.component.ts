import { Component } from '@angular/core';
import { routes } from './constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routeNames = routes;
  title = 'shop-template-front';
}
