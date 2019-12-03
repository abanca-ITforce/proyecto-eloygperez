import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countries;

  constructor() { }

  ngOnInit() {
  }

}
