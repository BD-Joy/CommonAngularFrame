import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import '../assets/css/public.css'
import { SetOptionComponent } from './set-option.component';
import { IssueListComponent } from './issue-list.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        SetOptionComponent,
        IssueListComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
export class AppModule { }