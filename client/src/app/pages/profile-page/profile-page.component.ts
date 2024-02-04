import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        requests: [],
    };

    constructor(private router: Router) {}

    goToCreation() {
        this.router.navigate(['/garden-creation']);
    }
}