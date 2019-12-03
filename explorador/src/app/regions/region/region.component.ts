import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from 'src/app/explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ex-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  cod;
  info$: Observable<any>;
  countries$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private explorerService: ExplorerService) {
    this.cod = this.route.snapshot.params.cod;
    this.info$ = this.explorerService.getRegion(this.cod);
    this.countries$ = this.explorerService.getCountriesOfRegion(this.cod);
  }

  ngOnInit() {
  }

}
