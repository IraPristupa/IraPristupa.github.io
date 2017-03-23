$(function() {
// Slider
    $('.carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        autoPlay: true,
        lazyLoad: true
    });

// showing blocks 1 per page (for width 320px)
    var elWrap = $('#info'),
        el =  elWrap.find('.info-block'),
        indexImg = 1,
        indexMax = el.length;
    
    function change () {
        el.fadeOut(500);
        el.filter(':nth-child('+indexImg+')').fadeIn(500);
    }   
    
    $('span.next').click(function() {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change ();
    });

    $('span.prev').click(function() {
        indexImg--;
        if(indexImg < 1) {
            indexImg = indexMax;
        }
        change ();
    }); 

});

