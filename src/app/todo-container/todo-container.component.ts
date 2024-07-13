import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [CommonModule, AddTodoComponent],
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {
  todos: string[] = [];

  addTodo(newTodo: string) {
    this.todos.push(newTodo);
  }
}
