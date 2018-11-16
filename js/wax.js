---
layout: none
---

// on load
$(document).ready(function() {
  resizeMetaBox();
});

// on resize
$(window).on('resize', function(){
  resizeMetaBox();
});

// metadata table

function resizeMetaBox() {
  if ( $( ".image-viewer" ).length ) {
    var viewerWidth = $('.image-viewer').width();
    var metaBox = $('#metadata-block');
    metaBox.width(viewerWidth);
  }
}

function IIIFViewerLeaflet(manifestUri) {
  if ( $( "#iiif-viewer-leaflet" ).length ) {
    var iiifLayers = {};
    var leafletIiifViewer = L.map('iiif-viewer-leaflet', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoomSnap: 0,
      zoom: 0
    });
    $.getJSON(manifestUri, function(data) {
      var i = 1;
      $.each(data.sequences[0].canvases, function(_, val) {
        var label = `image ${i}`;
        iiifLayers[label] = L.tileLayer.iiif(`${val.images[0].resource.service['@id']}/info.json`, {fitBounds: true});
        i++;
      });
      if (i > 2){ L.control.layers(iiifLayers).addTo(leafletIiifViewer);}
      iiifLayers[Object.keys(iiifLayers)[0]].addTo(leafletIiifViewer);
    });
  }
}

function miradorManifestViewer(manifest_uri) {
  Mirador({
    id: 'mirador-iiif-viewer',
    data: [
      { "manifestUri": manifest_uri }
    ],
    windowObjects: [{
      loadedManifest: manifest_uri,
      viewType: "ScrollView"
    }]
  });
}

function miradorComparisonViewer(m1, m2) {
  Mirador({
    id: "mirador-iiif-viewer",
    layout: "1x2",
    data: [
      { "manifestUri": m1 },
      { "manifestUri": m2 }
    ],
    windowObjects: [{
      loadedManifest: m1,
      slotAddress: "row1.column1",
      viewType: "ImageView",
      displayLayout: false,
      bottomPanel: false,
      bottomPanelAvailable: false,
      bottomPanelVisible: false,
      sidePanel: false,
      annotationLayer: false
    },
    {
      loadedManifest: m2,
      slotAddress: "row1.column2",
      viewType: "ImageView",
      displayLayout: false,
      bottomPanel: false,
      bottomPanelAvailable: false,
      bottomPanelVisible: false,
      sidePanel: false,
      annotationLayer: false
    }]
  });
}
