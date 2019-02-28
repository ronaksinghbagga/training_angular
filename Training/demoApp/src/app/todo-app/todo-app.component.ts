import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  Id: number;
  Title: string;
  Status: string;
  constructor() { }

  ngOnInit() {
  }
  arr:Todo[]=[
    new Todo(1, 'Learn Angular', 'Pending'),
    new Todo(2, 'Learn Node.js', 'Pending'),
    new Todo(3, 'Learn Ionic', 'Pending'),
    new Todo(4, 'Learn Angular.js', 'Done')
  ];
  onDelete(item:Todo){
    this.arr.splice(this.arr.indexOf(item),1);
  }

  onAdd(){
    this.arr.push(new Todo(this.Id, this.Title, this.Status));
  }

}
