import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LateralComponent } from './lateral/lateral.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { NovprodComponent } from './novprod/novprod.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    LateralComponent,
    HomeComponent,
    ProdutoComponent,
    NovprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
