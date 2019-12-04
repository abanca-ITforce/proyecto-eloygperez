import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'ex-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.css']
})
export class SelectorsComponent implements OnInit {
  @Input() incomes;
  @Input() lendings;
  @Input() regions;
  @Output() search = new EventEmitter<any>();

  searchForm = this.formBuilder.group({
    incomes: [null, []],
    lendings: [null, []],
    regions: [null, []]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    this.search.emit(this.searchForm.value);
  }

  onReset() {
    this.searchForm.reset();
  }

}
