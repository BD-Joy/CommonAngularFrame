import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetOptionComponent } from './set-option.component';
import { IssueListComponent } from './issue-list.component';

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/issues",
        pathMatch: "full"
    },
    {
        path: "option",
        component: SetOptionComponent
    },
    {
        path: "issues",
        component: IssueListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);