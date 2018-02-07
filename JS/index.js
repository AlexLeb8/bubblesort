// var myName=5;
// var yourName=myName;
// alert (yourName);

// var user="Name";

// alert (typeof user);
// alert (typeof myName);

// var a;
// alert (typeof a);

// var x=10;
// var y=5;
// var result = x*y;
// alert (result);

// var x=10;
// var y="Name";
// var result = x+y;
// alert (result);

// function firstFunction (user) {alert("stoPizzot")}
// firstFunction (rgfegfd);

// var result = prompt("Ваше имя");
// alert (result);

// result = confirm(question);

// var isAdmin = confirm("Вы - администратор?");
// alert( isAdmin );

// var x=10;

// if (x>5) {alert("Мало")}




// var x=prompt("skolko");

// switch (x) {
//     case 5: document.write('x=5');break;
//     case 6: document.write('x=6');break;
//     case 7: document.write('x=7');break;
//     case 8: document.write('x=8');break;
//     case 9: document.write('x=9');break;

//     default: document.write('x=neizvestno');break;
// }




// var age=prompt("skolko?");

// var message = (age<18)? 'Ваш возраст слишком маленький':
// (age>18 && age<50)? 'Oтличный возраст' : " ";

// alert(message);




// var login=prompt("Введите ваш логин?");

// if (login='Admin') {prompt('Введите пароль');}
// else if (login!=='Admin') {alert('Я вас не знаю');}




// for (var i=0; i<15; i++) {
//     if (i % 3 == 0) continue;
//     document.write (i + "<br>");
// }




// var x=29;
// for (var i=17; i<x; i++) {
//     if (i % 2 == 0) {
//         if (i == x - 1) continue;
//         else if(i == x - 2) continue;        
//     document.write(i + "<br>");
//     }
// }




// var x=0;
// while(x<10) {
//     document.write(x);
//     x++;
// }




// var y=200;
// do {    document.write("Cikl");
// }   while (y<100);




// var x
// do { x=prompt ("Введите четное число больше 20");
// }   while (x<20);
// if (x % 2 == 0);




// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr[9]);

// вывод элементов массива
// for (var i=0; i<arr.length; i++) {
//     document.write(arr[i]+"<br>");
// }



// наполнение массива данными
// var arr=[];
// var first=5;
// for (i=0; i<5; i++);
// arr[i]=first;
// first+=1;

// for (var i=0; i<arr.length; i++) {
// document.write(arr[i]+"<br>");
// }

// посчитать сумму массива
// var sum;




/* var arr_1 = newArray();
var arr_2 = newArray();
var arr_3 = newArray();
for (var i=0; i<5; i++) arr_1[i]=i;
for (var i=0; i<10; i++) arr_2[i]=i;
for (var i=0; i<15; i++) arr_3[i]=i;

var arr = newArray(arr_1, arr_2, arr_3);

for (var x=0; x<arr.length; x++); {
    for (var j=0; j<arr[x].length; j++); {
        document.write(arr[x][j] + "");
    }
    document.write("<br>");
}*/


var testarr=[5,8,0,3,9];
for (x=0; x<testarr.length; x++){
    for (var i=0; i<testarr.length; i++){
        if (testarr[i]>testarr[i+1]) {
            var a=testarr[i]; 
            var b=testarr[i+1];
            testarr[i]=b; 
            testarr[i+1]=a;        
        }
    }
}
console.log(testarr);
document.write(testarr);




