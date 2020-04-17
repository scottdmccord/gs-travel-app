import { Component, AfterViewInit } from '@angular/core';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

import { CITIES } from '../shared/mock-data/cities-mock';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrls: ['./pin-map.component.scss']
})
export class PinMapComponent implements AfterViewInit {
  map: Map;
  features: Feature[];

  rasterLayer: TileLayer = new TileLayer({
    source: new XYZ({
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }) 
  });

  constructor() { }

  ngAfterViewInit() {

    this.features = this.buildFeatures(CITIES);

    var vectorSource = new VectorSource({ features: this.features });
    var vectorLayer = new VectorLayer({ source: vectorSource });

    this.map = new Map({
      target: 'map',
      layers: [this.rasterLayer, vectorLayer],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 4
      })
    });   
  }

  createIconFeature(city: City): Feature {
    return new Feature({
      geometry: new Point(fromLonLat([city.long, city.lat])),
      name: city.name
    });
  }

  createIconStyle(): Style {
    // TODO: Dynamically decide src depending on if visited
    return new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
      })
    });
  }

  buildFeatures(cities: City[]): Feature[] {
    const style = this.createIconStyle();
    return cities.map(city => {
      const feature = this.createIconFeature(city);
      feature.setStyle(style);
      return feature;
    });
  }

}
