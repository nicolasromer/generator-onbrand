/*============================================================
  Onbrand Customization CSS
=============================================================*/
</style>
    <link rel="stylesheet" href="//cihost.uberflip.com/<%= name %>/client/client.css">
    <link rel="stylesheet" href="//cihost.uberflip.com/<%= name %>/onbrand.css">
<!--   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">-->
<style>
/*============================================================*/ 



/*============================================================
  Onbrand Customization JS
=============================================================*/
}(window.jQuery, window.Hubs));
</script><script src="//cihost.uberflip.com/<%= name %>/onbrand.js"></script><script>
(function($, Hubs, undefined) {
    /*===========================================
      Add any hub event js into these functions
    ============================================*/    
    Hubs.onLoad                 = function() { 
        window.onbrand.onLoad();
        // yourFunction();
    }
    Hubs.onResize               = function() { window.onbrand.onResize(); }
    Hubs.onScroll               = function() { window.onbrand.onScroll(); }
    Hubs.onPageChange           = function() { window.onbrand.onPageChange(); }
    Hubs.onItemsLoaded          = function() { window.onbrand.onItemsLoaded(); }
    Hubs.onCtaActivate          = function() { window.onbrand.onCtaActivate(); }
    Hubs.onCtaFormSubmitSuccess = function() { window.onbrand.onCtaFormSubmitSuccess(); }
    window.onload               = function() { window.onbrand.onWindowLoad(); }
/*============================================================
    Add any non-hub-event js below
=============================================================*/ 



(function($, Hubs, undefined) {

  /*==============================================================
   Custom Functions
  ===============================================================*/


  /*=============================================================
    fix embed tile errors and kill process
  ===============================================================*/
  (function () { if (window.location.href.indexOf('?embedtile') !== -1) {
      $('.tile.single').css({position: "fixed",top: 0,left: 0,zIndex: 2147483647,opacity: 1,transform: 'none',"animation-name": 'initial',visibility: 'visible',"animation-duration": 0});
      throw new Error("Embed Tile Fix triggered");
    }})();

  /*==============================================================
    Header & Footer Ajax
  ===============================================================*/
  var subdir = "<%= name %>";

  // Insert Header
  $.ajax({
    url: '//cihost.uberflip.com/' + subdir + '/includes/header.html?v1'
  }).done(function(data) {
    $('body').prepend(data);
          
    /* Integrate top-nav into main */
    // $('.top-nav').prependTo('.main');

  });

  // Insert Footer
  $.ajax({
    url: '//cihost.uberflip.com/' + subdir + '/includes/footer.html?v1'
  }).done(function(data) {
    $('footer').remove();
    $('body').append(data);
  });

  /*==============================================================
    Customize target streams
  ===============================================================*/
  if ($('#hubs-container > div:eq(0)').attr('data-collection-type') === "targeted") {
    $('.top-nav').hide();
  }
    
  /*==============================================================
    Remove .touch on touchscreen laptops
  ===============================================================*/
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : $('html').removeClass('touch');
    
  /*==============================================================
    Hub hover menu position fix
  ===============================================================*/
  Hubs.Search.prototype.updateOverlaySize = function() {};
  function fixShareWidget() {
    var navtop = $('.top-nav').offset().top - $(window).scrollTop() + $('.top-nav').height(); // px offset from page top
    $('.share-hub, .share-item, .search-drop-down').css('top', navtop);
    $('.search-results-overlay,.search-results-backdrop').css('top', navtop);
  }
    
  /*==============================================================
    Events
  ===============================================================*/
  window.onbrand = {};
  window.onbrand.onLoad = function() {
    fixShareWidget();
  }
  window.onbrand.onResize = function() {
    fixShareWidget();
  }
  window.onbrand.onScroll = function() {
    fixShareWidget();
  }
  window.onbrand.onPageChange = function() {
    fixShareWidget();
  }
  window.onbrand.onItemsLoaded = function() {}
  window.onbrand.onCtaActivate = function() {}
  window.onbrand.onCtaFormSubmitSuccess = function() {}
  window.onbrand.onWindowLoad = function() { // window.onload
    fixShareWidget();
  };
    

}(window.jQuery, window.Hubs));



