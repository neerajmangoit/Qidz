import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModel } from 'src/app/carousel.model';

@Component({
  selector: 'app-carousel-category',
  templateUrl: './carousel-category.component.html',
  styleUrls: ['./carousel-category.component.css']
})
export class CarouselCategoryComponent implements OnInit {

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
