
$(function() {

    $('.tabs__navigation li:first').addClass("active");
    $('.tabs__content li:first').css ('display', 'block');
    
    $('.tabs__navigation').delegate('li', 'click', function(event) {
        event.preventDefault()
        $(this).addClass('active').siblings().removeClass('active')
        .parents('.tabs').find('.tabs__content li').hide()
        .eq($(this).index()).fadeIn('fast');
          
    });
	
  
 });