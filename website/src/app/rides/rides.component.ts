import { Component, OnInit } from '@angular/core';
import { RidesService } from './../rides.service';

@Component({
    selector: 'app-rides',
    templateUrl: './rides.component.html',
    styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
    constructor(private ridesService: RidesService) {}

    rides: any[];

    ngOnInit() {
        this.getRides();
    }

    getRides() {
        this.ridesService.getFutureRides().subscribe(rides => (this.rides = rides));
    }
}
