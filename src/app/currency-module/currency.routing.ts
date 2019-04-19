import { Routes, RouterModule } from '@angular/router';
import { DetailCurrencyComponent } from './list-currency/detail-currency/detail-currency.component';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'currencyDetails/:code' , component: DetailCurrencyComponent },
  { path: '' , component: ListCurrencyComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CurrencyRoutingModule {}
