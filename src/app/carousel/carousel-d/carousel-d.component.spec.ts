import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDComponent } from './carousel-d.component';

describe('CarouselDComponent', () => {
  let component: CarouselDComponent;
  let fixture: ComponentFixture<CarouselDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
