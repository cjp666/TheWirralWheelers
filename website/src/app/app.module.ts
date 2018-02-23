import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RidesComponent } from './rides/rides.component';
import { RideArchiveComponent } from './ride-archive/ride-archive.component';
import { ProposedRidesComponent } from './proposed-rides/proposed-rides.component';
import { GallaryComponent } from './gallary/gallary.component';

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
        GallaryComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
