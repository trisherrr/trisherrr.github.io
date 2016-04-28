$(document).ready(function() {
  $( ".img-box" ).each(function( index ) {
    //assign elem to the selected img-box for reference
    var elem = this;

    //bind each class with img-box to open into a popup
    $(elem).bind( "click", function() {
      //$('body, html').animate({ scrollTop: 0 }, '0');

      $("body").scrollTop(0,0);

      //for ie 
      window.scrollTo(0,0);

      //check if overlay div is already showing
      if ($("#overlay").hasClass('enlarge')) {
        //hide overlay and popup if its already open
        $("#overlay, #popup").removeClass('enlarge');
      } else {
        //show overlay and popup it its not already open
        $("#overlay, #popup").addClass('enlarge');

        //get the image element of the selected image
        var content = $(elem).html();

        //append element to the popup container for display
        $("#popup .popup-contents").html('');
        $("#popup .popup-contents").append(content);
      }
    });
  });
});

//shared hide popup function to close button on top right of
//popup and clicking anywhere outside of the popup
function hidePopup() {
   $("#overlay, #popup").removeClass('enlarge');
} 