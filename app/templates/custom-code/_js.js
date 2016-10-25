/*  Onbrand Customization
=============================================================*/
}(window.jQuery, window.Hubs));
</script>
<script src="//cihost.uberflip.com/<%= name %>/js/inject.js"></script>
<script>
(function($, Hubs, undefined) {
    /* Add any hub event js into these functions */    
    Hubs.onLoad 				= function() { window.onbrand.onLoad(); }
    Hubs.onResize 				= function() { window.onbrand.onResize(); }
    Hubs.onScroll 				= function() { window.onbrand.onScroll(); }
    Hubs.onPageChange 			= function() { window.onbrand.onPageChange(); }
    Hubs.onItemsLoaded 			= function() { window.onbrand.onItemsLoaded(); }
    Hubs.onCtaFormSubmitSuccess = function() { window.onbrand.onCtaFormSubmitSuccess(); }
    window.onload 				= function() { window.onbrand.onWindowLoad(); }
/*============================================================
	Add any non-hub-event js below */