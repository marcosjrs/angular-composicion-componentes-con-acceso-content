import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';
import { CountrySelectedComponent } from './components/country-selected/country-selected.component';
import { CountriesPageComponent } from './pages/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryFlagComponent,
    CountrySelectedComponent,
    CountriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
