import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.css']
})
export class CardCounterComponent implements OnInit {
  @Input() count: number;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }
}
