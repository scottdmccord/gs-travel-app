import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

// Open Layers imports
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

// Models and Data
import { CITIES } from '../shared/mock-data/cities-mock';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrls: ['./pin-map.component.scss']
})
export class PinMapComponent implements AfterViewInit {
  @ViewChild('popup') popup: NgbPopover;
  
  map: Map;
  features: Feature[];
  location: string; 

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

    var element = document.getElementById('popup');

    var popup = new Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -50]
    });


    this.map.addOverlay(popup);

    // display popup on click
    this.map.on('click', function(evt) {
      var feature = this.map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
          return feature;
        });
      if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
      
        this.location = feature.get('name');

        this.popup.close();
        this.popup.open({location: this.location});

      }
    }.bind(this));
  
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
        src: '/assets/images/bigcity_blue_icon.png'
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
