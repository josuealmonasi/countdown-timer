import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sCount = 0;
  public mCount = 0;
  public hCount = 0;
  public dCount = 0;
  public started = false;
  public err = '';

  ngOnInit() { }

  /**
   * secondssCounter
   */
  public secondssCounter(): void {
    setInterval(() => {
      this.sCount -= 1;
      if (this.sCount <= 0) {
        this.sCount = 59;
        this.mCount -= 1;
        if (this.mCount <= 0) {
          this.mCount = 59;
          this.hCount -= 1;
          if (this.hCount <= 0) {
            this.hCount = 23;
            this.dCount -= 1;
            if (this.dCount <= 0) {
              this.dCount = 0;
            }
          }
        }
      }
    }, 1000);
  }

  /**
   * startCountDown
   */
  public startCountDown(): void {
    if (this.hCount > 23) {
      this.err = 'Hours number cannot be greater than 23';
      this.hCount = 0;
      return;
    }
    if (this.mCount > 23) {
      this.err = 'Minutes number cannot be greater than 59';
      this.mCount = 0;
      return;
    }
    if (this.sCount > 23) {
      this.err = 'Seconds number cannot be greater than 59';
      this.sCount = 0;
      return;
    }
    this.secondssCounter();
    this.started = true;
  }
}
