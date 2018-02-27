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

    menuItems: MenuItem[] = [
        new MenuItem('Home', '/home'),
        new MenuItem('Rides', '/rides'),
        new MenuItem('Ride Archive', '/rideArchive'),
        // new MenuItem('Proposed Rides', '/proposedRides'),
        // new MenuItem('Gallary', '/gallary'),
        new MenuItem('Contact', '/contact'),
        new MenuItem('About', '/about')
    ];

    ngOnInit() {}

    isActive(route: string): boolean {
        return route === this.router.url;
    }
}

class MenuItem {
    constructor(public title: string, public route: string) {}
}
