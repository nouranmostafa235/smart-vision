import {Component, OnInit} from '@angular/core';
import {MainSliderService} from '../../Services/main-slider.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent implements OnInit {

  constructor(private service: MainSliderService) {
  }
  sliders: any
  ngOnInit() {
    this.getItems()
  }

  getItems (){
    this.service.getSliders().subscribe({
      next: (value) => {
        this.sliders = value;
      }
    })
  }
}
