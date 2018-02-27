import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ride } from '../ride';
import { RidesService } from '../rides.service';

@Component({
    selector: 'app-ride-details',
    templateUrl: './ride-details.component.html',
    styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private service: RidesService) {}

    ride: Observable<Ride>;

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.getRide(id).subscribe(ride => {
            this.ride = ride;
            console.log(this.ride);
        });
    }
}
