import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovProdComponent } from './novprod.component';

describe('NovprodComponent', () => {
  let component: NovProdComponent ;
  let fixture: ComponentFixture<NovProdComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovProdComponent  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovProdComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
