import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  produtos: Array<Produto> = [];

  constructor(router: Router, servProd: ProdutoService) {
    this.router = router; 
    this.servProd = servProd;
  
  }
  incluir(): void {
    this.router.navigateByUrl('/novoprod')
  }
  excluir(codigo: string): void {
    this.servProd.remover(codigo);
    this.router.navigateByUrl("/produto");
  }

  ngOnInit(): void {
    this.produtos = this.servProd.obterTodos();
  }

}

