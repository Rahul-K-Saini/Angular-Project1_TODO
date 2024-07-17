import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { addTODOtoDB, getTODOfromDB, deleteTODOfromDB } from '../../firebase/firestore';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [CommonModule, FormsModule, AddTodoComponent],
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: any[] = [];
  isInputMode: boolean[] = [];
  newData: string = '';

  async ngOnInit(): Promise<void> {
    const querySnapshot = await getTODOfromDB();
    querySnapshot.forEach((doc) => {
      this.todos.push({ id: doc.id, ...doc.data() });
      this.isInputMode.push(false);
    });
  }

  async addTodo(newTodo: string) {
    await addTODOtoDB(newTodo);
    this.todos.push({ todo: newTodo });
    this.isInputMode.push(false);
  }

  async deleteTodo(index: number) {
    const todoId = this.todos[index].id;
    await deleteTODOfromDB(todoId);
    this.todos.splice(index, 1);
    this.isInputMode.splice(index, 1);
  }

  editTodoMode(index: number) {
    this.isInputMode[index] = true;
    this.newData = this.todos[index].todo;
  }

  saveTodo(index: number) {
    if (this.newData.trim()) {
      this.todos[index].todo = this.newData;
    }
    this.isInputMode[index] = false;
    this.newData = '';
  }
}
