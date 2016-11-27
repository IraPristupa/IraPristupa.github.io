window.onload = function () {
	modal = document.getElementById('modal');
	modal.classList.add('visuallyhidden', 'hidden');
}

function disp(modal) {
    if (modal.classList.contains("hidden", 'visuallyhidden')) {
        modal.classList.remove("hidden");
        setTimeout(function () {
      		modal.classList.remove('visuallyhidden');
    	}, 250);
    } else {
        modal.classList.add("visuallyhidden");
        setTimeout(function () {
      		modal.classList.add('hidden');
    	}, 350);
    }
}