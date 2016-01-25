import Ember from 'ember';
/* global L */

export default Ember.Component.extend({
  classNames: ['map'],
  marker: function(){
    return L.marker([this.get('station.latitude'), this.get('station.longitude')], {
      icon: L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'rail',
        'marker-color': '#fa0'
      }),
      draggable: true
    });
  }.property(),

  map: function() {
    let opentransport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png');
    let mapboxTiles = L.tileLayer('mapbox.streets');
    let map = L.map(this.get('elementId'))
    .addLayer(opentransport)
    .setView([this.get('station.latitude'), this.get('station.longitude')], 12);
    let Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    map.addControl(new L.Control.Layers({'Mapbox':mapboxTiles, 'Satellite': Esri_WorldImagery, 'OpenTransport': opentransport }));
    L.control.scale().addTo(map);
    return map;
  }.property(),

  _coordsDidChange: function(){
    Ember.run.once(this, 'coordsDidChange');
  }.observes('station.longitude', 'station.latitude'),

  coordsDidChange(){
    let marker = this.get('marker');
    let map = this.get('map');
    let latLng = L.latLng(this.get('station.latitude'), this.get('station.longitude'));
    marker.setLatLng(latLng);
    map.panTo(latLng);
  },

  didInsertElement() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiY2FwaXRhaW5ldHJhaW4iLCJhIjoiR0xBa1hRNCJ9.8yfGvImVdDP6hTXr-YIRNw';
    let marker = this.get('marker');
    let map = this.get('map');
    marker.addTo(map);

    marker.on("dragend", (event) => {
      this.set('station.latitude',  event.target.getLatLng().lat);
      this.set('station.longitude',  event.target.getLatLng().lng);
    });
  }
});
