import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ex-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  title = 'Regions';
  regions$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) {
    this.regions$ = this.explorerService.getRegions();
  }

  ngOnInit() {
  }

}
