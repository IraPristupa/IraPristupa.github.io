

$(document).ready(function(){
	$('input').each(function(index, input) {
		var $input = $(input)
		
		$input.parent().append("<div class='tooltip' id='"+$input.attr('name')+"'><p>"+$input.attr('title')+"</p></div>")
		$(this).removeAttr("title");
		
		$input.on('mouseover mouseout', function(event) {
			if(event.type == 'mouseover' && $input.parent().find('.tooltip').css('display') == 'block') return false;
			
			$input.parent().find('.tooltip').slideToggle()	
		})
	})
	$('button').on('click', function() {
		$('.tooltip').css({display:'block'});
	})
});