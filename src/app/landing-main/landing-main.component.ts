import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {

  range = [0, 100];

  constructor() { }

  ngOnInit() {
  }

}
