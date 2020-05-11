import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
    title: string,
    id: number,
    completed: boolean,
    date?: any
}

@Injectable({ providedIn: 'root' })
export class TodoService {
    public todos: Todo[] = [];

    constructor(private http: HttpClient) { }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/posts?_limit=10')
            .pipe(tap(todos => this.todos = todos));
    };

    toggleCheckbox(id: number): void {
        let index = this.todos.findIndex(elem => elem.id === id);
        this.todos[index].completed = !this.todos[index].completed;
    };

    deleteTodo(id: number): void {
        this.todos = this.todos.filter(elem => elem.id !== id);
    };

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    };
}