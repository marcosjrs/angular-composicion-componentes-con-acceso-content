import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-selected.component.html',
  styleUrls: ['./country-selected.component.css']
})
export class CountrySelectedComponent implements OnInit {
  @Input() selectedCountry = '';
  constructor() { }

  ngOnInit(): void {
  }

}
