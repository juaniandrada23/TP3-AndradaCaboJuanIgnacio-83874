import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosFamiliasComponent } from './articulos-familias.component';

describe('ArticulosFamiliasComponent', () => {
  let component: ArticulosFamiliasComponent;
  let fixture: ComponentFixture<ArticulosFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosFamiliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
