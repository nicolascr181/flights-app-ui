import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: '/home', // Redirect empty path to 'home'
        pathMatch: "full"
    },
    {
        path: '**', // Wildcard route for any other URL
        redirectTo: '/home', // Redirect empty path to 'home'

    }
];
