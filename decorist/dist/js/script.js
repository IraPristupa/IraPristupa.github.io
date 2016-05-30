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
	
	$('#cart').html(html)

})($)


function decrease(itemIndex) {
	$($('#cart tr')[itemIndex]).find('input').val(function() {
		return $(this).val() <= 0 ? 0 : new Number($(this).val()) - 1
	}).change()
}

function increase(itemIndex) {
	$($('#cart tr')[itemIndex]).find('input').val(function() {
		return new Number($(this).val()) + 1
	}).change();
}

//todo Integrate validation for manually typing negative numbers
function calcPrice(event) {
	var $input = $(event.target),
		$cell = $input.parent().next(),
		count = $input.val()

	$cell.html('$'+$input.data('price')*count)
}

function removeFromCart(event) {
	$(event.target).parent().parent().parent().remove()
}