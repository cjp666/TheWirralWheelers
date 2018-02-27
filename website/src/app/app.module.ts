import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RidesComponent } from './rides/rides.component';
import { RideArchiveComponent } from './ride-archive/ride-archive.component';
import { ProposedRidesComponent } from './proposed-rides/proposed-rides.component';
import { GallaryComponent } from './gallary/gallary.component';
import { RidesService } from './rides.service';
import { RideSummaryComponent } from './ride-summary/ride-summary.component';
import { RidesOverviewComponent } from './rides-overview/rides-overview.component';
import { RideSafetyComponent } from './ride-safety/ride-safety.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        RidesComponent,
        RideArchiveComponent,
        ProposedRidesComponent,
        GallaryComponent,
        RideSummaryComponent,
        RidesOverviewComponent,
        RideSafetyComponent,
        NotFoundComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AppRoutingModule,
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot(),
        BrowserModule.withServerTransition({ appId: 'ngx-bootstrap' })
    ],
    providers: [RidesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
