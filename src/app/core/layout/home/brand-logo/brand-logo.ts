import { Component, signal } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand-logo',
  imports: [CarouselModule],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.css',
})
export class BrandLogo {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    margin: 20,
    dots: true,
    nav: false,
    navText: ['Prev', 'Next'],
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      900: { items: 4 }
    }
  };

  slides = [
    { id: '1', img: '/images/logo-1.jpg' },
    { id: '2', img: '/images/logo-2.jpg' },
    { id: '3', img: '/images/logo-3.jpg' },
    { id: '4', img: '/images/logo-4.jpg' },
    { id: '5', img: '/images/logo-5.jpg' },
    { id: '6', img: '/images/logo-6.jpg' }
  ];

}
