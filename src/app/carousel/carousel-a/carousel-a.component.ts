import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModel } from 'src/app/carousel.model';

@Component({
  selector: 'app-carousel-a',
  templateUrl: './carousel-a.component.html',
  styleUrls: ['./carousel-a.component.css']
})
export class CarouselAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    autoplay: true,
    dots: true,
    loop: true,
    nav:true,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1229: {
        items: 4
      },
      1230: {
        items: 4
      }
    }
  }

}
