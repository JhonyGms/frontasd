import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dataSearch = '';

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    console.log(this.dataSearch);
  }
}
