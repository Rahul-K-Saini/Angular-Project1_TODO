import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  newTodo: string = '';
  @Output() addTodoEvent = new EventEmitter<string>();
  @Output() deleteTodoEvent = new EventEmitter<string>();
  deleteTodo(){
    
  }
  addTodo() {
    if (this.newTodo.trim()) {
      this.addTodoEvent.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
