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
      if (this.hCount === 0 && this.dCount === 0 && this.mCount === 0 && this.sCount === 0) {
        return;
      }
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
    }, 1);
  }

  /**
   * startCountDown
   */
  public startCountDown(): void {
    if (this.dCount === 0) {
      this.err = 'Days must be greater than 0.';
      return;
    }
    this.secondssCounter();
    this.started = true;
  }
}
