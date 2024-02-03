import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AppComponent } from '@app/pages/app/app.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponentComponent } from './components/auth-button-component/auth-button-component.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [AppComponent, MainPageComponent, AuthButtonComponentComponent, TopBarComponent],
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
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
