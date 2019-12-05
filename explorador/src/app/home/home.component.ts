import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  countries$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) {
    this.countries$ = this.explorerService.getAllCountriesFilter();
  }

  ngOnInit() {
  }

}
