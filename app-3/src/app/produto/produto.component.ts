import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  router: Router;

  constructor(router: Router) {this.router = router; }

  incluir(): void {
    this.router.navigateByUrl('/novoprod')
  }

  excluir(codigo: string): void {}

  ngOnInit(): void {
  }

}
