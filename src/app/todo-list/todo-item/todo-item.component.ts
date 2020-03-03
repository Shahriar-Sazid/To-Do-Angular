import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input() todoItem: { text: string; id: number; completed: boolean };
  @Input() count: { totalCount: number; incompleteCount: number };

  @Output() onDelete = new EventEmitter<{
    text: string;
    id: number;
    completed: boolean;
  }>();

  ngOnInit(): void {}

  onTick(): void {
    this.todoItem.completed = !this.todoItem.completed;
    if (this.todoItem.completed) {
      this.count.incompleteCount--;
    } else {
      this.count.incompleteCount++;
    }
  }

  selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  onUpdate(span: HTMLSpanElement): void {
    this.todoItem.text =
      span.innerHTML.trim() === '' ? this.todoItem.text : span.innerHTML.trim();
    span.innerHTML = this.todoItem.text;
    span.blur();
  }
}
