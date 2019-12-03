import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Search';

  incomes$: Observable<any[]>;
  lendings$: Observable<any[]>;
  regions$: Observable<any[]>;
  // search$: Observable<any[]>;
  loaded = false;
  search: any[];

  constructor(private formBuilder: FormBuilder, private explorerService: ExplorerService) {
    this.incomes$ = this.explorerService.getIncomeLevels();
    this.lendings$ = this.explorerService.getLendingTypes();
    this.regions$ = this.explorerService.getRegions();
  }

  ngOnInit() {
  }

  onSearch(event: any) {
    // this.search$ = this.explorerService.search2(event);
    this.loaded = true;
    this.explorerService.search2(event).subscribe({
      next: data => {
        this.search = data;
      },
      complete: () => this.loaded = false
    });
  }

}
