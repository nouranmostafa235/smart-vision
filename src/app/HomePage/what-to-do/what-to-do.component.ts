import {Component, OnInit} from '@angular/core';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {WhatToDoService} from '../../Services/what-to-do.service';

@Component({
  selector: 'app-what-to-do',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './what-to-do.component.html',
  styleUrl: './what-to-do.component.css'
})
export class WhatToDoComponent implements OnInit{
 constructor(private service: WhatToDoService) {
 }

 items:any

  ngOnInit() {
   this.getItems()
  }

  getItems(){
   this.service.getItems().subscribe({
     next: data => {
       this.items = data;
     }
   })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout:3000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
