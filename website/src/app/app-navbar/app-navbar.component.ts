import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.component.html',
    styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
    constructor(private location: Location, private router: Router) {}

    ngOnInit() {}

    isActive(title: string): boolean {
        return title === this.router.url;
    }
}
