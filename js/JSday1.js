var x=5, y=6;
var sum = x + y;
var firstName = 'Jason';
var lastName = 'Solomon';
var isTrue = true;

console.log(x, y);
console.log('The Sum of x and y is:', sum);
console.log('Hi my name is ', firstName, lastName);
console.log('This is a boolean:', isTrue);


if(x == 5 && y== 6){ //true
    console.log('the condition is true');
}

if(x==5 && y != 6){ //false
    console.log('the condition is flase so this will not show');
}

if(firstName == 'Jason' || lastName == 'Solomon'){ //true
    console.log('You are in!');
}else{
    console.log('You are out!');
}

if(!isTrue){
        console.log('isTrue is', isTrue);
}else{
        console.log('isTrue vslue is', isTrue);
}