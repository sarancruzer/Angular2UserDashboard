import { Component } from '@angular/core';
import {User} from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: ['./app.component.css'] 
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