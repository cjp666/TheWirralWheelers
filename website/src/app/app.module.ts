import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AppRoutingModule,
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot(),
        BrowserModule.withServerTransition({ appId: 'ngx-bootstrap' })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
