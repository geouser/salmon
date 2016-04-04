// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {


/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


  $('#side_pannel').perfectScrollbar();

  var map;
  function googleMap_initialize() {
    var lat = $('#map-canvas').attr('data-lat');
    var long = $('#map-canvas').attr('data-long');
    var mapCenterCoord = new google.maps.LatLng(lat, long-0.004);
    if ($(window).width() > 1600 ) {
      var mapCenterCoord = new google.maps.LatLng(lat, long-0.004);
    } else {
      var mapCenterCoord = new google.maps.LatLng(lat, long-0.003);
    }
    var mapMarkerCoord = new google.maps.LatLng(lat, long);

    var mapOptions = {
      center: mapCenterCoord,
      zoom: 17,
      //draggable: false,
      disableDefaultUI: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var markerImage = new google.maps.MarkerImage('images/marker.png');
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: mapMarkerCoord, 
      map: map,
      title:"ДИКИЙ ЛОСОСЬ"
    });

    var markersBounds = new google.maps.LatLngBounds();
    console.log(markersBounds.extend(mapCenterCoord));
    
    $(window).resize(function (){
      map.setCenter(mapCenterCoord);
    });
  };
  googleMap_initialize();


});




