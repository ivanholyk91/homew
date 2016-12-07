// alert('Hello Word!');
// document.write('Hello Word!');
// console.log('Hello Word!');

// var name = prompt('Enter your name');
// document.write('Hello ' + name);

// var a = Number(prompt('введіть число'));
// var b = Number(prompt('введіть число'));
// var c = Number(prompt('введіть число'));
// var sum = a+b+c;
// document.write(sum);

var a=prompt("введите число","здесь нужно ввести число");
var b=prompt("введите число","здесь нужно ввести число");
var c=prompt("введите число","здесь нужно ввести число");
document.write(a+"x<sup>2</sup>+"+b+"x+"+c+"=0");
var Dis=b*b-4*a*c;//Вичислення дискремінанта
if(Dis>=0){
(x1=(-b+Math.sqrt(Dis))/(2*a))&&(x2=(-b-Math.sqrt(Dis))/(2*a))//вичислення кореня
}else{
 alert("немає коренів");
 }
 alert(x1+" "+x2);
