import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterCurrencyComponent } from './filter-currency/filter-currency.component';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { AppRoutingModule } from './app.routing';
import { DetailCurrencyComponent } from './list-currency/detail-currency/detail-currency.component';

@NgModule({
   declarations: [
      AppComponent,
      PaginationComponent,
      FilterCurrencyComponent,
      ListCurrencyComponent,
      DetailCurrencyComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
