import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'cart', component: CartComponent},
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'details', component: DetailsComponent
  },
  {
    path: 'success', component: SuccessComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: '', component: LoginComponent
  },
 
  {
    path: '**', component: ErrorComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
