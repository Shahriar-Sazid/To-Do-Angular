import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  constructor() {}
  @Input() count: { totalCount: number; incompleteCount: number };
  @Input() mode: { all: boolean; active: boolean; completed: boolean };

  @Output() onDeleteCompleted = new EventEmitter();
  ngOnInit(): void {}
  showAll() {
    this.mode.all = true;
    this.mode.active = false;
    this.mode.completed = false;
  }
  showActive() {
    this.mode.all = false;
    this.mode.active = true;
    this.mode.completed = false;
  }
  showCompleted() {
    this.mode.all = false;
    this.mode.active = false;
    this.mode.completed = true;
  }
}
