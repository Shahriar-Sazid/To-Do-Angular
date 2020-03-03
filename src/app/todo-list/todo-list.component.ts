import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  constructor() {}

  @Input() todoItems: Array<{ text: string; id: number; completed: boolean }>;
  @Input() count: { totalCount: number; incompleteCount: number };
  @Input() mode: { all: boolean; active: boolean; completed: boolean };

  ngOnInit(): void {}

  allowable(item): boolean {
    if (this.mode.all === true) return true;
    else if (this.mode.active === true) return !item.completed;
    else if (this.mode.completed === true) return item.completed;
  }

  deleteItem(todoItem: { text: string; id: number; completed: boolean }) {
    const idx = this.todoItems.findIndex(item => item.id === todoItem.id);
    if (todoItem.completed) {
      this.count.totalCount--;
    } else {
      this.count.totalCount--;
      this.count.incompleteCount--;
    }
    this.todoItems.splice(idx, 1);
  }
}
