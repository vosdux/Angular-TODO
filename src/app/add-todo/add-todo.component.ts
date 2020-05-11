import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.todoService.addTodo(todo);
    this.title = ''
  }

}
