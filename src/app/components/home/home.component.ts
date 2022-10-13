import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  Item: any;

  ngOnInit(): void {}

  addItem(newItem: any) {
    console.log(newItem);
    this.Item = newItem;
  }
}
