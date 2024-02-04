import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenCreationComponent } from '@app/pages/garden-creation/garden-creation.component';
import { InfoPageComponent } from '@app/pages/info-page/info-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { ProfilePageComponent } from '@app/pages/profile-page/profile-page.component';

const routes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'garden-creation', component: GardenCreationComponent },
    { path: 'info', component: InfoPageComponent },
    { path: 'profile-page', component: ProfilePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
