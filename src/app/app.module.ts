import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PinMapComponent } from './pin-map/pin-map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: PinMapComponent },
  { path: 'cities', component: CitiesListComponent },
  { path: 'ratings', component: RatingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PinMapComponent,
    NavBarComponent,
    CitiesListComponent,
    RatingsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatListModule,
    NgbModule
    // NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
