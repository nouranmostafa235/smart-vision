import {Component, OnInit} from '@angular/core';
import {NavBarService} from '../../Services/nav-bar.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
 constructor(private service : NavBarService) {
 }
 items:any=[]
 ngOnInit() {
  this.getItems()
 }
 getItems(): void {
   this.service.getItems().subscribe({
     next: items => {
       this.items = items;
     }
   })
 }
}
