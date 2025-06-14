import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { Community } from './components/community/community';
import { Post } from './components/post/post';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'community', component: Community },
    { path: 'post/:id', component: Post },
    { path: '**', component: NotFound } // Wildcard route
];