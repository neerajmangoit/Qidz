import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    autoplay: true,
    dots: false,
    loop: true,
    nav:false,
    margin: 25,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1229: {
        items: 4
      },
      1230: {
        items: 6
      },
    }
  }
   
}
