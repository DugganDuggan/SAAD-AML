import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then((m) => m.HomeComponent)
    }
    },
    {
    path: 'register',
    loadComponent: () => {
        return import('./register/register.component').then((m) => m.RegisterComponent)
    }
    },
    {
    path: 'login',
    loadComponent: () => {
        return import('./login/login.component').then((m) => m.LoginComponent)
    }
    },
    {
    path: 'account',
    loadComponent: () => {
        return import('./account/account.component').then((m) => m.AccountComponent)
    }
    }
];
