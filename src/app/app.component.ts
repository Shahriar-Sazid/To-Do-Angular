import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  todoItems: Array<{ text: string; id: number; completed: boolean }> = [];
  lastId: number = -1;
  mode = {
    all: true,
    active: false,
    completed: false
  };
  count = {
    totalCount: 0,
    incompleteCount: 0
  };

  inputTaken(itemText: string): void {
    this.lastId++;
    this.count.incompleteCount++;
    this.count.totalCount++;
    const item = {
      text: itemText.trim(),
      id: this.lastId,
      completed: false
    };
    this.todoItems.push(item);
  }

  deleteCompleted(): void {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].completed) {
        this.todoItems.splice(i--, 1);
        this.count.totalCount--;
      }
    }
  }
}
