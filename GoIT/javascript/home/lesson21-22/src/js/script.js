'use strict';

$(function() {

  var html = $('#testing').html();

  var data = {
    headerTitle: 'Тест по программированию',
    questions: [
      {
        title: 'Вопроc №1',
        options: ['Ответ№1', 'Ответ№2', 'Ответ№3'],
        trueValue: [2]
      },
      {
        title: 'Вопроc №2',
        options: ['Ответ№1', 'Ответ№2', 'Ответ№3'],
        trueValue: [0]
      },
      {
        title: 'Вопроc №3',
        options: ['Ответ№1', 'Ответ№2', 'Ответ№3', 'Ответ№4'],
         trueValue: [0, 3]
      },
      {
        title: 'Вопроc №4',
        options: ['Ответ№1', 'Ответ№2', 'Ответ№3', 'Ответ№4'],
        trueValue: [0]
      },
      {
        title: 'Вопроc №5',
        options: ['Ответ№1', 'Ответ№2', 'Ответ№3', 'Ответ№4'],
        trueValue: [0, 2, 3]
      }],
        submit: 'Проверить мои результаты'
    };

  var content = tmpl(html,data);

  $('body').append(content);
  
  
  localStorage.setItem('testing', JSON.stringify(data));
  var test = localStorage.getItem('testing');

  test = JSON.parse(test);

  console.log(test)

});

function createRightAnswers(test) {
    var answersObject = {};
    test.questions.forEach(function(question, index) {
      answersObject["question"+index] = question.trueValue;
    });
    return answersObject;
  }

// $( "input" ).on( "click", function() {
//   $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
// });

$('#myModal').on('shown.bs.modal', function () {
  // $('#myInput').focus();
//    if($("#agree").attr("checked") != 'checked') { 
//             $("#agree").css('border', '1px solid red');
//             return false;
//         }
//         return true;
// }
})


