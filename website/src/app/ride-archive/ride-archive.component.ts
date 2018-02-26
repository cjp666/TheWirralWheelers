import { Component, OnInit } from '@angular/core';
import { RidesService } from './../rides.service';

@Component({
    selector: 'app-ride-archive',
    templateUrl: './ride-archive.component.html',
    styleUrls: ['./ride-archive.component.css']
})
export class RideArchiveComponent implements OnInit {
    constructor(private ridesService: RidesService) {}

    rides: any[];

    ngOnInit() {
        this.getRides();
    }

    getRides() {
        this.ridesService.getPreviousRides().subscribe(rides => (this.rides = rides));
    }
}
