import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RidesService {
    constructor(private db: AngularFirestore) {}

    /** Retrieve a list of future rides */
    getFutureRides(): Observable<any[]> {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const rides = this.db
            .collection('rides', ref => ref.where('date', '>=', date).orderBy('date', 'asc'))
            .valueChanges();
        return rides;
    }

    /** Retrieves a list of previous rides */
    getPreviousRides(): Observable<any[]> {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const rides = this.db
            .collection('rides', ref => ref.where('date', '<', date).orderBy('date', 'desc'))
            .valueChanges();
        return rides;
    }
}
