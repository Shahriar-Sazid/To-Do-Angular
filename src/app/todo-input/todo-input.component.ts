import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  constructor() {}

  @Output() inputTaken = new EventEmitter<string>();
  @ViewChild('todo_input_elem') todo_input_elem: ElementRef;

  ngOnInit(): void {}

  onInput(itemText: string): void {
    this.todo_input_elem.nativeElement.value = '';
    itemText = itemText.trim();
    if (itemText === '') {
      return;
    }
    this.inputTaken.emit(itemText);
  }
}
