import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-grand-opening',
  standalone: true,
  imports: [],
  templateUrl: './grand-opening.component.html',
  styleUrl: './grand-opening.component.css'
})
export class GrandOpeningComponent implements OnInit, OnDestroy {
  targetDate = new Date('2025-07-25T23:59:59');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private subscription!: Subscription;

  ngOnInit() {
    this.calculateTimeLeft();
    this.subscription = interval(1000).subscribe(() => this.calculateTimeLeft());
  }

  calculateTimeLeft() {
    const now = new Date().getTime();
    const target = this.targetDate.getTime();
    const difference = target - now;

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((difference / (1000 * 60)) % 60);
      this.seconds = Math.floor((difference / 1000) % 60);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
      this.subscription.unsubscribe(); // Stop the timer when countdown is over
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
