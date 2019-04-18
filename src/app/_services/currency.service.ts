import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../_models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyUrl = environment.baseUrl + 'currency/';
  constructor(private http: HttpClient) { }

  getAllCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.currencyUrl);
  }

  getCurrencyByCode(code: string): Observable<Currency> {
    return this.http.get<Currency>(this.currencyUrl + code);
  }
}
