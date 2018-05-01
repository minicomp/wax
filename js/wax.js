function resizeWaxBanner() {
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

function nextSlide() {
  var q = function(sel) { return document.querySelector(sel); }
  q("#wax-banner").appendChild(q("#wax-banner .banner-item:first-child"));
  resizeWaxBanner();
}
setInterval(nextSlide, 3000);

function resizeMetaBox() {
  var viewerWidth = $('#iiif-viewer').width();
  var metaBox = $('#metadata-block');
  metaBox.width(viewerWidth);
}
$(window).on('resize', function(){
  resizeMetaBox();
})

resizeMetaBox();
resizeWaxBanner();

$(window).on('resize', function(){
  resizeMetaBox();
  resizeWaxBanner();
})
