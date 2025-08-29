import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novprod',
  templateUrl: './novprod.component.html',
  styleUrls: ['./novprod.component.css']
})

export class NovprodComponent implements OnInit {
  router: Router;

  constructor(router: Router) {this.router = router; }

  incluir(): void {
    this.router.navigateByUrl("/produto")
  }
  ngOnInit(): void { }

}
