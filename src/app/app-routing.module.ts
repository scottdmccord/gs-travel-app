import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PinMapComponent } from './pin-map/pin-map.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { City } from './shared/models/city.model';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: PinMapComponent },
  { path: 'cities/:id', component: City},
  { path: 'cities', component: CitiesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
