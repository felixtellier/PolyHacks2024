import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '@app/services/communication.service';
import { UserAuthentificationService } from '@app/services/user-authentification.service';
import { User } from '@common/user';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    user: User = {
        id: 1,
        email: '',
        name: 'AAA',
        password: '',
        gardens: [],
        points: 0,
        requests: [],
    };

    constructor(
        private router: Router,
        private communicationService: CommunicationService,
        private userService: UserAuthentificationService,
    ) {}

    ngOnInit(): void {
        this.communicationService.getUser(this.userService.user.id).subscribe({
            next: (user) => {
                this.user = user;
            },
        });
    }

    goToCreation() {
        this.router.navigate(['/garden-creation']);
    }
}
