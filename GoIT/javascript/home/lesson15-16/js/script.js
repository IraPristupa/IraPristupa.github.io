
/*--------- LESSON #15 (AJAX) ----------*/

function GoogleCallback (func, data) {
    window[func](data);
};

$(function() {
 
    var $wrapper = $('.wrapper');
    var $button = $('.search__button')  

    $button.on('click', function(e) {

        var $text = $('.search__input').val();

        e.preventDefault();
   
        $.ajax({

            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+ $text +"&rsz=8&callback=GoogleCallback&context=?",
            dataType : "jsonp",
            success: function (data) {
                $result = $('.result');
                $result.remove();

                var ul = document.createElement("ul");
                $.each(data.results, function(i, val) {
                    var li = document.createElement("li");
                    li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');                           
                    ul.appendChild(li);
                });
                var $result = document.createElement('div');
                $result.classList.add('result');
                $result.appendChild(ul);
                $wrapper.append($result);
            }

        });
    });

});

/*--------- LESSON #16 (PROTOTYPE) ----------*/

function Human() {
    this.name = 'Irina';
    this.age = '25';
    this.sex = 'female';
    this.height = '172sm';
    this.weight = '56kg';
}

function Worker() {
    this.workPlace = 'GOOGLE';
    this.selary = '1000 dollars';
    this.work = function() {
        alert('Работать')
    };
}

function Student() {
    this.studyPlace = 'university';
    this.scholarship = '500 dollars';
    this.watchSeries = function() {
        alert('Смотреть сериалы')
    };
}
 
var newHuman = new Human();
console.log('newHuman', newHuman);

Worker.prototype = new Human();
var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();

console.log('newWorker1', newWorker1);


Student.prototype = new Human();
var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();

console.log('newStudent2', newStudent2)