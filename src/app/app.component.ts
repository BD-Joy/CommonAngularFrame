import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello World</h1>
    `
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        $("h1").after("<p>Are you ready to start?</p>");
    }
}