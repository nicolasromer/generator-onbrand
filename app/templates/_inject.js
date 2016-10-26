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
    Hubs.onCtaFormSubmitSuccess = function() { window.onbrand.onCtaFormSubmitSuccess(); }
    window.onload               = function() { window.onbrand.onWindowLoad(); }
    /*============================================================
        Add any non-hub-event js below
    =============================================================*/ 



(function($, Hubs, undefined) {
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
  var cacheSwitch = true;

  function headerAjax() {
    return $.ajax({
      url: '//cihost.uberflip.com/' + subdir + '/includes/header.html?v1',
      cache: cacheSwitch
    }).success(function(data) {
      $('body').prepend(data);
            
      /* Integrate top-nav into main */
      // $('.webgl  .top-nav').prependTo('.main');

    });
  }

  function footerAjax() {
    return $.ajax({
      url: '//cihost.uberflip.com/' + subdir + '/includes/footer.html?v1',
      cache: cacheSwitch
    }).success(function(data) {
      $('footer').remove();
      $('body').append(data);
    });
  }

  $.when(headerAjax(), footerAjax()).done(function(a1, a2) {
   // $.getScript('//cihost.uberflip.com/' + subdir + '/conflict.js');
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
  function topFix() {
    var navtop = $('.top-nav').offset().top - $(window).scrollTop() + $('.top-nav').height(); // px offset from page top
    $('.share-hub, .share-item, .search-drop-down').css('top', navtop);
    $('.search-results-overlay,.search-results-backdrop').css('top', navtop);
  }
    
  /*==============================================================
    Events
  ===============================================================*/
  window.onbrand = {};
  window.onbrand.onLoad = function() {
    topFix();
  }
  window.onbrand.onResize = function() {
    topFix();
  }
  window.onbrand.onScroll = function() {
    topFix();
  }
  window.onbrand.onPageChange = function() {
    topFix();
  }
  window.onbrand.onItemsLoaded = function() {}
  window.onbrand.onCtaFormSubmitSuccess = function() {}
  window.onbrand.onWindowLoad = function() { // window.onload
    topFix();
  };
    
  /*==============================================================
   Custom Functions
  ===============================================================*/

}(window.jQuery, window.Hubs));



