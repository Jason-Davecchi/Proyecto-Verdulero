import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPrductScreenComponent } from './details-prduct-screen.component';

describe('DetailsPrductScreenComponent', () => {
  let component: DetailsPrductScreenComponent;
  let fixture: ComponentFixture<DetailsPrductScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPrductScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPrductScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
