import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ex-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  id;
  country$: Observable<any>;
  extra$: Observable<any>;

  constructor(private route: ActivatedRoute, private explorerService: ExplorerService) {
    this.id = this.route.snapshot.params.cod;
    this.country$ = this.explorerService.getCountry(this.id);
    this.extra$ = this.explorerService.getCountryIndicators(this.id);
  }

  ngOnInit() {
  }

}
