import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'cart', component: CartComponent},
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
