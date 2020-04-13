import { Component, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrls: ['./pin-map.component.scss']
})
export class PinMapComponent implements AfterViewInit {
  map: Map;

  constructor() { }

  ngAfterViewInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 7
      })
    });   
  }

}
