import { Component, OnInit, ViewChild, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyService } from '../../_services/currency.service';
import { Currency } from '../../_models/currency';
import { FilterItem } from '../../_models/filterItem';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';
import { RealTimeFilter } from '../../_models/realTimeFilter';


@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.css']
})
export class ListCurrencyComponent implements OnInit {
  AllCurencies: Currency[] = [];
  AllFilteredCurrencies: Currency[] = [];
  pagedCurrency: Currency[] = [];


  itemPerpage = 5;
  totalSize = 1;

  constructor(private currencyService: CurrencyService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllCurrency();
  }

  getAllCurrency(): void {
    this.currencyService.getAllCurrency()
      .subscribe(currencies => {
        this.AllCurencies = currencies;
        // copy the table in the filtered list
        this.AllFilteredCurrencies = Object.assign(this.AllCurencies);
        // this.pagedCurrency = this.AllCurencies.slice(0, this.itemPerpage);
        this.pagedCurrency = this.AllFilteredCurrencies.slice(0, this.itemPerpage);

      }, error => {
        console.log(error);
      });
  }

  onPageChange(page: number) {
    const startIndex = (page - 1) * this.itemPerpage;
    const endIndex = startIndex + (+this.itemPerpage);
    // this.pagedCurrency = this.AllCurencies.slice(startIndex, endIndex);
    this.pagedCurrency = this.AllFilteredCurrencies.slice(startIndex, endIndex);
    console.log('from nPageChange');
    console.log(this.AllFilteredCurrencies);

  }
  onItemPerPageChange(itemperPage: number) {
    this.itemPerpage = itemperPage;
    this.onPageChange(1);
  }

  onFilterChange(filter: FilterItem) {
    if (filter.filterBy !== '' && filter.filterValue !== '') {
      this.AllFilteredCurrencies = this.AllCurencies.filter(curr => {
        switch (filter.filterBy) {
          case 'code': {
            return curr.code.toLowerCase().indexOf(filter.filterValue.toLowerCase()) >= 0;
          }
          case 'name': {
            return curr.name.toLowerCase().indexOf(filter.filterValue.toLowerCase()) >= 0;
          }
          default: {
            return false;
          }
        }
      });
    } else {
      this.AllFilteredCurrencies = Object.assign(this.AllCurencies);
    }
    this.onPageChange(1);
  }

  // for real time search --> is about to apply filter
  search(term: RealTimeFilter) {
    // mapping the RealTimeFilter interface to filterTermsSearch in order to use the filter function
    const filter: FilterItem = {filterBy: 'code', filterValue: term.searchTerm };
    console.log(filter);
    this.onFilterChange(filter);
  }
}
