import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCComponent } from './carousel-c.component';

describe('CarouselCComponent', () => {
  let component: CarouselCComponent;
  let fixture: ComponentFixture<CarouselCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
