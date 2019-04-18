import { Component, OnInit, Input } from '@angular/core';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import { Currency } from 'src/app/_models/currency';
import { CurrencyService } from 'src/app/_services/currency.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.css']
})
export class DetailCurrencyComponent implements OnInit {
  code: string;
  currency: Currency;
  constructor(private currencyService: CurrencyService,
      private route: ActivatedRoute
      ) { }

  ngOnInit() {
    this.code = this.route.snapshot.params['code'];
    console.log(this.code);
    this.getCurrencyByCode(this.code);
  }

  getCurrencyByCode(code: string) {
    this.currencyService.getCurrencyByCode(code)
      .subscribe(curr => {
        this.currency = curr
        }, err => {
          console.log(err);
        });
  }
}
