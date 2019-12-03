import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ex-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
