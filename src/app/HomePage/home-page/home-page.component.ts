import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MainSliderComponent} from '../main-slider/main-slider.component';
import {NgOptimizedImage} from '@angular/common';
import {WhereToGoComponent} from '../where-to-go/where-to-go.component';
import {GrandOpeningComponent} from '../grand-opening/grand-opening.component';
import {WhatToDoComponent} from '../what-to-do/what-to-do.component';
import {SubscribeComponent} from '../subscribe/subscribe.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavBarComponent,
    MainSliderComponent,
    NgOptimizedImage,
    WhereToGoComponent,
    GrandOpeningComponent,
    WhatToDoComponent,
    SubscribeComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
