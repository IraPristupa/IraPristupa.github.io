
$('#video_how_it_works').click(function () {
        var src = 'https://www.youtube.com/watch?v=HNruYrXqhQM';
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
    });

    $('#myModal button').click(function () {
        $('#myModal iframe').removeAttr('src');
    });
    // https://www.youtube.com/watch?feature=player_embedded&v=HNruYrXqhQM
    
    var selects = document.querySelectorAll('.select');

    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('click', function() {
            var select = this;
            if (!select.classList.contains('is-open')) {
                if (select.classList.contains('selected')) {
                    select.classList.remove('selected');
                } else {
                    select.classList.add('is-open');
                }
            } else {
                select.classList.remove('is-open');
            }
        })
    }

    var options = document.querySelectorAll('.select li');

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function() {
            var select = this.parentElement.parentElement;

            select.querySelector('.placeholder').textContent = this.textContent;
            select.querySelector('input[type=hidden]').value = this.value;
            select.classList.add('selected');
            select.classList.remove('is-open');
        })
    }