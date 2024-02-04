import { Component } from '@angular/core';
import { User } from '@common/user';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
    user: User = {
        id: 1,
        email: '',
        name: 'AAA',
        password: '',
        gardens: [],
        points: 0,
    };
}
