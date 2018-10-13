---
layout: none
---

// banner

function resizeWaxBanner() {
  if ( $( "#wax-banner" ).length ) {
    var $waxBanner = $('#wax-banner');
    var bannerImgHeight = $waxBanner.find('.banner-img').height(); //all wax banner images have same height
    var tallestCaptionHeight = 0;
    $waxBanner.find('.banner-caption').each(function() {
      if($(this).height() > tallestCaptionHeight) {
        tallestCaptionHeight = $(this).height();
      }
    });
    $waxBanner.height(bannerImgHeight + tallestCaptionHeight);
  }
}

function nextSlide() {
  if ( $( "#wax-banner" ).length ) {
    var q = function(sel) { return document.querySelector(sel); }
    q("#wax-banner").appendChild(q("#wax-banner .banner-item:first-child"));
    resizeWaxBanner();
  }
}
setInterval(nextSlide, 3000);

// metadata table

function resizeMetaBox() {
  if ( $( "#leaflet-iiif-viewer" ).length ) {
    var viewerWidth = $('#leaflet-iiif-viewer').width();
    var metaBox = $('#metadata-block');
    metaBox.width(viewerWidth);
  }
  if ( $( "#mirador-iiif-viewer" ).length ) {
    var viewerWidth = $('#mirador-iiif-viewer').width();
    var metaBox = $('#metadata-block');
    metaBox.width(viewerWidth);
  }
}

/// iiif viewers

function leafletImageViewer(image_uri) {
  if ( $( "#leaflet-iiif-viewer" ).length ) {
    var leaflet_viewer = L.map('leaflet-iiif-viewer', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoomDelta: 0.5,
      zoomSnap: 0,
      zoom: 0
    });
    L.tileLayer.iiif(image_uri).addTo(leaflet_iiif);
  }
}

function leafletManifestViewer(manifest_uri) {
  if ( $( "#leaflet-iiif-viewer" ).length ) {
    var iiifLayers = {};
    var leaflet_viewer = L.map('leaflet-iiif-viewer', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoomSnap: 0,
      zoom: 0
    });
    $.getJSON(manifest_uri, function(data) {
      var i = 1;
      $.each(data.sequences[0].canvases, function(_, val) {
        var label = 'image ' + i;
        iiifLayers[label] = L.tileLayer.iiif(val.images[0].resource.service['@id'] + '/info.json', {fitBounds: true});
        i++;
      });
      if (i > 2){ L.control.layers(iiifLayers).addTo(leaflet_viewer);}
      iiifLayers[Object.keys(iiifLayers)[0]].addTo(leaflet_viewer);
    });
  }
}

function miradorManifestViewer(manifest_uri) {
  Mirador({
    id: 'mirador-iiif-viewer',
    data: [
      { "collectionUri": "{{ '/iiif/collection/top.json' | absolute_url }}" }
    ],
    windowObjects: [{
      loadedManifest: manifest_uri,
      viewType: "ScrollView"
    }]
  });
}

function miradorComparisonViewer(m1, m2) {
  console.log('here');
  Mirador({
    id: "mirador-iiif-viewer",
    layout: "1x2",
    data: [
      { "collectionUri": "{{ '/iiif/collection/top.json' | absolute_url }}" },
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

// on load
$( document ).ready(function() {
  resizeMetaBox();
  resizeWaxBanner();
});

// on resize
$(window).on('resize', function(){
  resizeMetaBox();
  resizeWaxBanner();
});
