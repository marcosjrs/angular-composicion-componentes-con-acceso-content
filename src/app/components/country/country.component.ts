import { Component, ContentChild } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryFlagComponent } from '../country-flag/country-flag.component';
import { CountrySelectedComponent } from '../country-selected/country-selected.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  @ContentChild(CountryFlagComponent) flag!:CountryFlagComponent;
  @ContentChild(CountrySelectedComponent) selectedCountry!:CountrySelectedComponent;

  countries$ = this.countrySvc.getCountries();
  
  constructor(private countrySvc: CountryService) {}

  onChange(select:HTMLSelectElement) {  
    this.flag.selectedCountry = select.value;
    this.selectedCountry.selectedCountry = select.value; 
  }
}
