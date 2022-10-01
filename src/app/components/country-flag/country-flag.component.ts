import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent implements OnInit {
  @Input() selectedCountry = '';

  constructor() { }

  ngOnInit(): void {
  }

}
