var a=[1,2,3,4];

a.forEach(item => console.log(item));

for(var item in a)
    console.log(item);

for(var item of a)
    console.log(item);

//while//
var num =0;
while(num<5)
{
    console.log(num);
    num++; //num =num+1;//
}
do{
    console.log(num);
    num++;
}while(num<5)

var itr = 10;
console.log(itr++); //10//
console.log(itr); //11//

console.log(++itr); //12//
console.log(itr); //12//

//operators in js//
var num1=8,n=3;

console.log(num1<<n); //output64//
