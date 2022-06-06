import { Component, OnInit } from '@angular/core';

import { CarouselModel } from 'src/app/carousel.model';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-b',
  templateUrl: './carousel-b.component.html',
  styleUrls: ['./carousel-b.component.css']
})
export class CarouselBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  items: CarouselModel[] = [
    new CarouselModel('1', 'assets/img/banner-ad/bc_img_01.jpg'),
    new CarouselModel('2', 'assets/img/banner-ad/bc_img_02.jpg'),
    new CarouselModel('3', 'assets/img/banner-ad/bc_img_03.jpg'),
    new CarouselModel('4', 'assets/img/banner-ad/bc_img_02.jpg')
];

  customOptions: OwlOptions = {
    autoplay: true,
    dots: false,
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
