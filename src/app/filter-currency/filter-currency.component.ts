import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterItem } from '../_models/filterItem';
import { Subject } from 'rxjs';
import { RealTimeFilter } from '../_models/realTimeFilter';

@Component({
  selector: 'app-filter-currency',
  templateUrl: './filter-currency.component.html',
  styleUrls: ['./filter-currency.component.css']
})
export class FilterCurrencyComponent implements OnInit {

  filter: FilterItem = { filterValue: '', filterBy: 'code'};
  searchTerm$ = new Subject<string>(); // for real time search

  @Output() filterChange: EventEmitter<FilterItem> = new EventEmitter<FilterItem>();

  // for realTimeSearch
  @Output() realTimeSearch: EventEmitter<RealTimeFilter> = new EventEmitter<RealTimeFilter>();
  @Output() searchTermEvent: EventEmitter<Subject<string>> = new EventEmitter<Subject<string>>();
  constructor() { }

  ngOnInit() {
  }

  onFilterChange(value) {
    this.filter.filterBy = value;
  }

  applyFilter(value) {
    this.filter.filterValue = value;
    this.filterChange.emit(this.filter);
  }

  onKeyUp(terms) {
    console.log('from key up', terms);
    setTimeout(() => {
      this.realTimeSearch.emit({
        searchBy: this.filter.filterValue,
        searchTerm: terms
      });
    console.log('send data');
    }, 500);
  }
}
