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
  if ( $( "#iiif-viewer" ).length ) {
    var viewerWidth = $('#iiif-viewer').width();
    var metaBox = $('#metadata-block');
    metaBox.width(viewerWidth);
  }
}

/// iiif viewer

function loadIIIFViewer(manifest_uri) {
  if ( $( "#iiif-viewer" ).length ) {
    var iiif_viewer;
    var iiifLayers = {};
    var manifestUrl = manifest_uri;
    iiif_viewer = L.map('iiif-viewer', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoomDelta: 0.5,
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
      if (i > 2){ L.control.layers(iiifLayers).addTo(iiif_viewer);}
      iiifLayers[Object.keys(iiifLayers)[0]].addTo(iiif_viewer);
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
