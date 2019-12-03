import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() countries;

  constructor() { }

  ngOnInit() {
  }

}
