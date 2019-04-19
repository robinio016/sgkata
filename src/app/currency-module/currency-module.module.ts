import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyModuleComponent } from './currency-module.component';

import { FilterCurrencyComponent } from './filter-currency/filter-currency.component';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { DetailCurrencyComponent } from './list-currency/detail-currency/detail-currency.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CurrencyRoutingModule } from './currency.routing';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRoutingModule,
  ],
  declarations: [
    CurrencyModuleComponent,
    FilterCurrencyComponent,
    ListCurrencyComponent,
    DetailCurrencyComponent,
    PaginationComponent
  ]
})
export class CurrencyModuleModule { }
