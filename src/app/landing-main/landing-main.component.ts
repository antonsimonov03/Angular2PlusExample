import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {

  range = [35, 80];
  sliderConfig: any;
  tabBuyer = false;
  carSelected = false;
  btnSellCarText = 'See My Savings';
  switchChecked = false;

  constructor() { }

  ngOnInit() {
    this.sliderConfig = {
      behaviour: 'drag',
      connect: true,
      range: {
        min: 0,
        max: 100
      },
      tooltips: [
          {
            to (value: number) {
              return `£${value.toFixed(0)}`;
            }
          },
          {
            to (value: number) {
              return `£${value.toFixed(0)}`;
            }
          }
        ]
    };
  }

  btnSellCarHandler(): void {
    this.carSelected = !this.carSelected;
    this.btnSellCarText = this.carSelected ? 'Sell My Car' : 'See My Savings';
  }

  onChange(checked: boolean): void {
    this.switchChecked = checked;
  }

}
