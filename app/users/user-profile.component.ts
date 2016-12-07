import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
   selector: 'user-profile',
   template: `
            <div class="jumbotron" *ngIf="activeUser">
                <h2>{{ user.name }} <small>({{ user.username }})</small></h2>

                <input class="form-control" [(ngModel)]="activeUser.name">
            </div>` 
})

export class UserProfileComponent {
    // Passing parent information to the child: @Input()
    @Input() user: User;
}