import { Routes } from '@angular/router';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';

export const routes: Routes = [
    {path: 'register', loadComponent: () => {return import('./register/register.component').then((m) => m.RegisterComponent)}},
    {path: 'login', loadComponent: () => {return import('./login/login.component').then((m) => m.LoginComponent)}},
    {path: 'account', loadComponent: () => {return import('./account/account.component').then((m) => m.AccountComponent)}},
    {path: 'browse', loadComponent: () => {return import('./browse/browse.component').then((m) => m.BrowseComponent)}},
    {path: 'manage-inventory', loadComponent: () => {return import('./manage-inventory/manage-inventory.component').then((m) => m.ManageInventoryComponent)}},
    {path: 'media-details/:id', loadComponent: () => {return import('./media-details/media-details.component').then((m) => m.MediaDetailsComponent)}}
];
