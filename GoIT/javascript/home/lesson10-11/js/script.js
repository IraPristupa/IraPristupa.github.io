var x = +prompt('Введите число, которое будем возводить в степень');
var n = +prompt('Введите степень, в которую будем возводить');


function pow(base, exponent) {
  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}


var powResult = pow(x, n);

console.log(powResult);


var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Введите имя пользователя');
}

console.log(arr);

var userName = prompt('Введите свое имя');
var flag;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === userName){
    flag = true;
    break;
  }
  console.log(i);
}

if (flag){
  alert(userName + ', вы успешно вошли!');
} else {
  alert('Такого пользователя не существует!');
}
