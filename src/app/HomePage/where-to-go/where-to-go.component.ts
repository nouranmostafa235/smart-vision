import {Component, OnInit} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {CommonModule} from '@angular/common';
import {WhereToGoSliderService} from '../../Services/where-to-go-slider.service';

@Component({
  selector: 'app-where-to-go',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './where-to-go.component.html',
  styleUrl: './where-to-go.component.css'
})
export class WhereToGoComponent implements OnInit {
  constructor(private service: WhereToGoSliderService) {
  }

  items:any

  ngOnInit() {
    this.getItems()
  }
  getItems(){
    this.service.getSliders().subscribe({
      next: (data) => {
        this.items = data;
      }
      }
    )
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
