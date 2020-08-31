import { Component, OnInit } from '@angular/core';
import { CITIES } from '../shared/mock-data/cities-mock';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {
  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}



// PLACE WE HAVE NOT BEEN:
// Map with pins of things we want to do

// PLACE WE HAVE BEEN:
// Map with pins of things we've done
// Photo gallery at the bottom (?)