/* --------------------- SLIDER ----------------------- */

$(document).ready(function() {
	var sliderCount = $('.slider li').length;
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).find("li").each(function () {
  	if($(this).index() == 0) { $(this).addClass('active') }
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj) { // slider function
 var sl = $('.slider');
 var ul = sl.find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 sl.find('.active').removeClass('active')
 bl.addClass('active')
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки

}
$(document).on("click", ".slider-box i[class*=fa-arrow-]", function() { // slider click navigate
 var sl = $('.slider .active');
 var direction = $(this).data('direction');

 if(direction == 'next') {
 	var index = parseInt(sl.index()+1);
 	var next = $('.slider'+index);
 	if(next.length) {
 		sliderJS(index);
 	}
 } else {
 	var index = parseInt(sl.index() - 1);
 	var prev = $('.slider'+index);
 	if(prev.length) {
 		sliderJS(index);
 	}
 }
});