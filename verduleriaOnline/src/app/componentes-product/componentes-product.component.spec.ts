import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesProductComponent } from './componentes-product.component';

describe('ComponentesProductComponent', () => {
  let component: ComponentesProductComponent;
  let fixture: ComponentFixture<ComponentesProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
