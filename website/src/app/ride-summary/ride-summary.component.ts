import { Ride } from './../ride';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-ride-summary',
    templateUrl: './ride-summary.component.html',
    styleUrls: ['./ride-summary.component.css']
})
export class RideSummaryComponent implements OnInit {
    constructor() {}

    @Input() ride: Ride;

    ngOnInit() {}

    get rideClass() {
        if (!!this.ride) {
            const level = this.ride.level.substring(0, 1);
            switch (level) {
                case 'A':
                    return 'red-ride';
                case 'B':
                    return 'blue-ride';
                case 'C':
                    return 'green-ride';
            }
        }
        return 'purple-ride';
    }
}
