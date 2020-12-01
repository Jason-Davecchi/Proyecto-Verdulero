import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { DetailsPrductScreenComponent } from './screens/details-prduct-screen/details-prduct-screen.component';
import { CarritoComponent } from './screens/carrito/carrito.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: HomeScreenComponent },
  { path: 'Login', component: LoginScreenComponent},
  { path: 'Register', component: RegisterScreenComponent},
  { path: 'product-detail/:id', component: DetailsPrductScreenComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
