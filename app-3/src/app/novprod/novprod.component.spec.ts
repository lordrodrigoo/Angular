import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovprodComponent } from './novprod.component';

describe('NovprodComponent', () => {
  let component: NovprodComponent;
  let fixture: ComponentFixture<NovprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
