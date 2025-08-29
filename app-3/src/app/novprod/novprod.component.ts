import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-novprod',
  templateUrl: './novprod.component.html',
  styleUrls: ['./novprod.component.css']
})

export class NovprodComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  produto: Produto = new Produto();

  constructor(router: Router, servProd: ProdutoService) {
    this.router = router; 
    this.servProd = servProd;
  
  }
  incluir(): void {
    this.servProd.adicionar(this.produto);
    this.router.navigateByUrl("/produto")
  }
  ngOnInit(): void { }

}
