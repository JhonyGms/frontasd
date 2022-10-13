import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MutantService } from '../../services/mutant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dataSearch = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private MutantService: MutantService) {}

  ngOnInit(): void {}

  search(): void {
    this.MutantService.searchMutant(this.dataSearch).subscribe(
      (res) => {
        this.newItemEvent.emit(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
