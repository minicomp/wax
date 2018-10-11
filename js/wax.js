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
  if ( $( "#leaflet-iiif" ).length ) {
    var viewerWidth = $('#leaflet-iiif').width();
    var metaBox = $('#metadata-block');
    metaBox.width(viewerWidth);
  }
}

/// iiif viewer

function loadIIIFViewer(manifest_uri) {
  if ( $( "#leaflet-iiif" ).length ) {
    var leaflet_iiif;
    var iiifLayers = {};
    var manifestUrl = manifest_uri;
    leaflet_iiif = L.map('leaflet-iiif', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoomSnap: 0,
      zoom: 0
    });
    $.getJSON(manifestUrl, function(data) {
      var i = 1;
      $.each(data.sequences[0].canvases, function(_, val) {
        var label = 'image ' + i;
        iiifLayers[label] = L.tileLayer.iiif(val.images[0].resource.service['@id'] + '/info.json', {fitBounds: true});
        i++;
      });
      if (i > 2){ L.control.layers(iiifLayers).addTo(leaflet_iiif);}
      iiifLayers[Object.keys(iiifLayers)[0]].addTo(leaflet_iiif);
    });
  }
}

// on load

resizeMetaBox();
resizeWaxBanner();

if (typeof(manifest) != "undefined"){
  loadIIIFViewer(manifest);
}

// on resize

$(window).on('resize', function(){
  resizeMetaBox();
  resizeWaxBanner();
})
