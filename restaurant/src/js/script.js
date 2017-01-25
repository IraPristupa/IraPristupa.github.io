
// ------------   dropdown menu/ sub-menu --------------------

$(function() {
    var $dropdown = $('.dropdown');

    $dropdown.hover(function() {
      $( this ).fadeIn( 300 ).stop(true);
      $( this ).fadeOut( 200 ).stop(true);
      
      var $submenu = $(this).children().siblings('.sub-menu');
      var color = Math.floor(Math.random() * (999999 - 100000) + 100000);
        $submenu.slideToggle();
        $submenu.css('background', '#'+color)
        });

});

// --------------------- pagination ---------------------------

$(function() {
    var items = $(".food-menu__dish");

    var numItems = items.length;
    var perPage = 10;

    // only show the first 10 items initially
    items.slice(perPage).hide();

    // now setup pagination
    $("#pagination").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "light-theme",
        onPageClick: function(pageNumber) { // this is where the magic happens
        // someone changed page, lets hide/show trs appropriately
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            items.hide() // first hide everything, then show for the new page
                 .slice(showFrom, showTo).show();
        }
    });
});

// ------------------------  slider -----------------------

$(function() {
    $('.carousel').flickity({
        pageDots: false,
        wrapAround: true,
        prevNextButtons: true,
        autoPlay: true,
        lazyLoad: true
    });
});

