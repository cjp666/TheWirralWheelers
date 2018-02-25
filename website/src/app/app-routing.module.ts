import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RidesComponent } from './rides/rides.component';
import { RideArchiveComponent } from './ride-archive/ride-archive.component';
import { ProposedRidesComponent } from './proposed-rides/proposed-rides.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'rides', component: RidesComponent },
    { path: 'rideArchive', component: RideArchiveComponent },
    { path: 'proposedRides', component: ProposedRidesComponent },
    { path: 'gallary', component: GallaryComponent },
    { path: 'gallery', component: GallaryComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
