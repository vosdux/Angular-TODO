import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true
  public searchString: string = ''

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

}
