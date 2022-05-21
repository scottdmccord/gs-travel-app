import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PinMapComponent } from './pin-map/pin-map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    PinMapComponent,
    NavBarComponent,
    CitiesListComponent,
    HomeComponent,
    CitiesComponent,
    CityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
