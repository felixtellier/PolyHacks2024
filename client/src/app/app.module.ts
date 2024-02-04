/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AppComponent } from '@app/pages/app/app.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponentComponent } from './components/auth-button-component/auth-button-component.component';
import { GardenContainerComponent } from './components/garden-container/garden-container/garden-container.component';
import { GardenEditionComponent } from './components/garden-edition/garden-edition.component';
import { GardenComponent } from './components/garden/garden/garden.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { GardenCreationComponent } from './pages/garden-creation/garden-creation.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AuthentificationDialogComponent } from './components/authentification-dialog/authentification-dialog.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        AuthButtonComponentComponent,
        TopBarComponent,
        GardenContainerComponent,
        GardenComponent,
        GardenCreationComponent,
        GardenEditionComponent,
        InfoPageComponent,
        ProfilePageComponent,
        ConfirmationDialogComponent,
        AuthentificationDialogComponent,
    ],
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatTableModule,
        AuthModule.forRoot({
            domain: 'dev-cube6o10k3bfxl6d.us.auth0.com',
            clientId: '9vZNX3TpRLzwAyCraxkmfm2PrgVa6Hjm',
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
