import {Component, HostListener, OnInit} from '@angular/core';
import {NavBarService} from '../../Services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  constructor(private service : NavBarService) {
  }

  dropdowns:any

  ngOnInit() {
    this.getDropdowns()
  }

  getDropdowns() {
    this.service.getItems().subscribe({
      next: (items) => {
        this.dropdowns = items;
      }
    })
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('nav');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}
