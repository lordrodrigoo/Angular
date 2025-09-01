import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
 selector: 'app-novprod',
 templateUrl: './novprod.component.html',
 styleUrls: ['./novprod.component.css']
})
export class NovProdComponent implements OnInit {
 router: Router;
 servProd: ProdutoService;
 produto: Produto = new Produto();
 enviando: boolean = false;

 constructor(router: Router, servProd: ProdutoService) {
 this.router = router;
 this.servProd = servProd;
 }
 incluir():void{
 this.enviando = true;
 this.servProd.adicionar(this.produto)
 .subscribe(_=> {
 this.enviando = false;
 this.router.navigateByUrl("/produto")
 });
 }
 ngOnInit(): void { }
}