export class Ride {
    description: string;
    date: Date;
    distanceImage: string;
    elevationImage: string;
    isEvent: boolean;
    level: string;
    lunch: string;
    mapImage: string;
    rideLeader: string;
    start: string;
    title: string;
    comments: RideComment[];
}

class RideComment {
    comment: string;
    postedBy: string;
    photos: string[];
}
