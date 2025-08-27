import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LateralComponent } from './lateral/lateral.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';
import { ProdutoService } from './produto.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { Zippy } from './zippy';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    LateralComponent,
    HomeComponent,
    ProdutoComponent,
    NovProdComponent,
    LoginComponent,
    Zippy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ], // Adição de ProdutoService manual
  providers: [ProdutoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
