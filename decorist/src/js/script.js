(function($) {
	var products = [{
		name: 'Personal shopper package',
		image: 'dist/img/item.png',
		quantity: 1,
		price: 69
	},
	{
		name: 'Second goods',
		image: 'dist/img/item.png',
		quantity: 2,
		price: 4
	}], html

	for (var i = 0; i < products.length; i++) {
		var p = products[i]

		html += '<tr>'
		html += '<td><img src="'+p.image+'">'+p.name+'</td>'
		html += '<td><a onClick="decrease('+i+')"><div class="minus"></div></a><input onChange="calcPrice(event)" data-price="'+p.price+'" type="text" value="'+p.quantity+'"><a onClick="increase('+i+')"><div class="plus"></div></a></td>'
		html += '<td>$'+p.price*p.quantity+'</td>'
		html += '<td><a href="#" onClick="removeFromCart(event)"><div class="remove"></div></a>Remove</td>'
		html += '</td>'
	}

	$('.code a').on('click', function(event) {
		$(this).parent().html('<input type="text" hint="Yellow show" /> <button onClick="applyPromo(event)" class="btn btn-lg btn-primary"> Apply </button>')

		return false
	})
	
	$('#cart').html(html)
	calcPrice()
})($)

function decrease(itemIndex) {
	$($('#cart tr')[itemIndex]).find('input').val(function() {
		var val = $(this).val()
		return val <= 0 ? 0 : new Number(val) - 1
	}).change()
}

function increase(itemIndex) {
	$($('#cart tr')[itemIndex]).find('input').val(function() {
		return new Number($(this).val()) + 1
	}).change();
}

//todo Integrate validation for manually typing negative numbers
function calcPrice(event) {
	var totals = 0

	if(event) {
		var $input = $(event.target),
			$cell = $input.parent().next(),
			count = $input.val()

		$cell.html('$'+$input.data('price')*count)
	}
	
	var $inputs = $('#cart input')

	for (var i = $inputs.length - 1; i >= 0; i--) {
		var $input = $($inputs[i])
		totals += $input.data('price')*$input.val()
	}

	$('table.price tr:first-child td:last-child, table.price tr:last-child td:last-child').html('$'+totals)
}

function removeFromCart(event) {
	$(event.target).parent().parent().parent().remove()
	calcPrice()
}

function applyPromo(event) {
	$promoBlock = $(event.target)
	$input = $promoBlock.parent().find('input')
	
	if($input.val()) $promoBlock.parent().html('PROMO CODE: ' + $input.val() + ' APPLIED' + '<button onClick="skipPromo()" class="btn btn-primary btn-sm">Remove</button>')
}

function skipPromo() {
	$('.code').html('<a href="javascript:;">Enter promo code</a>')
}

function proceed(step) {
	var active = $('.navbar__item')

	active.removeClass('active')
	$(active[1]).addClass('active')

	$('.order-block__step'+(step-1)).hide();
	$('.order-block__step'+step).show();

	return false;
}

function placeOrder() {
	$('.payment-form button [type=submit]').click()
	$('.payment-form').on('submit', function() {
		proceed(3);

		var active = $('.navbar__item')

		$(active[1]).removeClass('active');
		$(active[2]).addClass('active');

		$('.order-success').show()

		setTimeout(function(){
  			$('.order-success').hide()
		}, 90000);

		return false;
	})
}