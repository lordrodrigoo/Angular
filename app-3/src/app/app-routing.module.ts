import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovprodComponent } from './novprod/novprod.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'novoprod', component: NovprodComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
