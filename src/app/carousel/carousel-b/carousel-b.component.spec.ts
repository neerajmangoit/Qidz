import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBComponent } from './carousel-b.component';

describe('CarouselBComponent', () => {
  let component: CarouselBComponent;
  let fixture: ComponentFixture<CarouselBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
