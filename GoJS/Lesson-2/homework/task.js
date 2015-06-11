//Task 1

var answer1 = prompt("Какой сейчас год?");
if (answer1 == '2015') {
    alert('Вы правы!');
} else{
    alert('С луны свалися? 2015!');
}

//Task 2

var answer2 = prompt("Введите любое целое число");
if (answer2 > 0) {
    alert('1');
} else if (answer2 < 0) {
    alert('-1');
} else{
    alert('0');
}

//Task 3

var answer3 = prompt("Enter login");
if (answer3 === 'admin') {
    password = prompt("Enter password");

    if (password == 'passw0rd'){
        alert('Welcome home!');
    } else if (password === null){
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }

} else if (answer3 === null) {
    alert('Cancelled');
} else {
    alert('Access denied');
}

//Task 4

var a = 1, b = 2;

(a + b >= 3) ? result = 'Yep!' :  result = 'Noup!';
alert(result);

//Task 5

var name = 'admin', text;

(name == 'admin') ? text = 'Hi'  :
    (name == 'manager') ? text = 'Hello' :
        (name == '') ? text = 'No login' : text = '';