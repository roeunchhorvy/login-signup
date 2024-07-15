import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login/login.component';
// import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'login',
        component: LoginSignupComponent
    },
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },

    {
        path: '**',
        component: PageNotFoundComponent
      }
];

