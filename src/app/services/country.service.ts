import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Country {
  name: String;
  code: String;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
  ];

  getCountries(): Observable<Country[]> {
    return of(this.countries);
  }
}
