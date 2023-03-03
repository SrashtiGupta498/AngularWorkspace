import { Component } from '@angular/core';
import {Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventorymanagementapp';
  products:Product[];
  constructor()
  {
    this.products =[
      new Product(
        'MYSHOES',
        'Blackrunning shoes',
        ['Men','Shoes','Runnigshoes'],
        1120
      ),
      new Product(
        'JACKET',
        'Black',
        ['WoMen','Winter','Leather'],
        1120
      ),
      new Product(
        'HAT',
        'Blackred',
        ['WoMen','girl','fun-ky'],
        1120
      ),
    ];
  
}
productwasselected(product:Product):void{
  console.log('product clicked ',product);
}
}
