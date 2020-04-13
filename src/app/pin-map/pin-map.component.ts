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

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrls: ['./pin-map.component.scss']
})
export class PinMapComponent implements AfterViewInit {
  map: Map;

  iconFeatureParis: Feature;
  iconStyleParis: Style;

  iconFeatureBerlin: Feature;
  iconStyleBerlin: Style;

  constructor() { }

  ngAfterViewInit() {

    this.iconFeatureParis = new Feature({
      geometry: new Point(fromLonLat([2.3522, 48.8566])),
      name: 'Paris'
    });

    this.iconStyleParis = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
      })
    });

    this.iconFeatureParis.setStyle(this.iconStyleParis);

    this.iconFeatureBerlin = new Feature({
      geometry: new Point(fromLonLat([13.4050, 52.5200])),
      name: 'Berlin'
    });

    this.iconStyleBerlin = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
      })
    });

    this.iconFeatureBerlin.setStyle(this.iconStyleBerlin);

    var vectorSource = new VectorSource({
      features: [this.iconFeatureParis, this.iconFeatureBerlin]
    });

    var vectorLayer = new VectorLayer({
      source: vectorSource
    });

    var rasterLayer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      }) 
    });

    this.map = new Map({
      target: 'map',
      layers: [rasterLayer, vectorLayer],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 4
      })
    });   
  }

}
