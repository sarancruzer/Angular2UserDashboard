import { Component } from '@angular/core';
import {User} from './shared/models/user';

@Component({
  selector: 'my-app',
  template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">User App Dashboard</a>
            </div>
        </nav>
    </header>

<main>

    <div class="row">

        <div class="col-sm-4">
            <div *ngIf="users">
            <ul class="list-group users-list">   
                <li class="list-group-item" 
                    *ngFor="let user of users"
                    (click)="selectUser(user)"
                    [class.active]="user === activeUser"> 
                    {{user.name}} ({{user.username}})
                </li>
            </ul>
            </div>
        </div>  

        <div class="col-sm-8">

            <div class="jumbotron" *ngIf="activeUser">
            <h2>{{activeUser.name}} <small>({{activeUser.username}})</small></h2>
            </div>

            <div class="jumbotron" *ngIf="!activeUser">
            <span class="glyphicon glyphicon-hand-left"></span>
            <h2>Choose a user</h2>
            </div>

        </div>
      
    </div>
   
</main>

    <footer class="text-center">
        Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .users-list li { 
        cursor: pointer;   
     }
     .jumbotron .glyphicon {
         font-size: 80px;
     }
  `] 
})
export class AppComponent {
    message: string = 'Test';
    users: User[] = [
        {id: 1, name: 'Jeroen', username: 'jeroenouw'},
        {id: 2, name: 'Tim', username: 'tim78'},
        {id: 3, name: 'Hank', username: 'hank123'}
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}