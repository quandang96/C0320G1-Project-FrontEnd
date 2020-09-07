import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private oneWay = false;

  constructor() {
  }

  ngOnInit() {
  }

  oneWayPicked() {
    this.oneWay = true;
  }

  twoWayPicked() {
    this.oneWay = false;
  }
}
