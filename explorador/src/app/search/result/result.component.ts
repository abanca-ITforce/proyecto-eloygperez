import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() search;

  constructor() { }

  ngOnInit() {
  }

}
