import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-auth-button-component',
    templateUrl: './auth-button-component.component.html',
    styleUrls: ['./auth-button-component.component.scss'],
})
export class AuthButtonComponentComponent {
    constructor(
        @Inject(DOCUMENT) public document: Document,
        public auth: AuthService,
    ) {}
}
