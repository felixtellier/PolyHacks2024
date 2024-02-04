import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '@app/services/communication.service';
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
    };

    constructor(
        private router: Router,
        private communicationService: CommunicationService,
    ) {}

    ngOnInit(): void {
        this.communicationService.getAllGardens().subscribe((gardens) => {
            this.user.gardens = gardens;
        });
    }

    goToCreation() {
        this.router.navigate(['/garden-creation']);
    }
}
