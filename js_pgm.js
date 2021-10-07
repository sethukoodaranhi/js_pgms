// simple calculator pgm using c

// #include<stdio.h>
// #include<conio.h>
// void main()
// {
//    int n1,n2,rslt;
    // char op;
    // clrscr();
    //printf("enter the no1:");
    // scanf("%d",&n1);
    // printf("enter the no2:");
    // scanf("%d",&n2);
    // printf("select the operator:(+,-,*,/)");
    // scanf(" %c",&op);
    // if(op=='+')
    // {
        // rslt=n1+n2;
        // printf("%d+%d=%d",n1,n2,rslt);
    // }
    // else if(op=='-'){
        // rslt=n1-n2;
        // printf("%d-%d=%d",n1,n2,rslt);
    // }
    // else if(op=='*'){
        // rslt=n1*n2;
        // printf("%d*%d=%d",n1,n2,rslt);
    // }
    // else{
        // rslt=n1/n2;
        // printf("%d/%d=%d",n,n2,rslt);
    // }
    // getch();
// }

// calculator using js
// var a=parseInt(prompt("enter no1"));
// var b=parseInt(prompt("enter no2"));
// var op=prompt("select the operator(+,-,*,/)");
// var rslt;
// if(op=='+')
// {
//     rslt=a+b;
// }
// else if(op=='-')
// {
//     rslt=a-b; 
// }
// else if(op=='*')
// {
//     rslt=a*b
// }
// else{
//     rslt=a/b;
// }
// console.log(`${a} ${op} ${b}=${rslt}`)

// sum of two number using c

// #include<stdio.h>
// #include<conio.h>
// void main()
// {
    // int n1,n2,sum=0;
    // clrscr();
    // printf("enter two numbers:");
    // scanf("%d,%d",n1,n2);
    // sum=n1+n2;
    // printf("sum of %d and %d is %d",n1,n2,sum);
    // getch();
// }

// sum of 2 nos using js

// var a=parseInt(prompt("enter no1"));
// var b=parseInt(prompt("enter no2"));
// var sum=0;
// sum=a+b;
// console.log("sum of two number is="+sum);

//  odd or even

// include<stdio.h>
// include<conio.h>
// void main(){
    // int n;
    // clrscr();
    // printf("enter a no:");
    // scanf("%d",n);
    // if(n%2==0){
        // printf("%d number is even",n);
    // }
    // else{
        // printf("%d number is odd",n);
    // }
// }

// odd or even using js

// var a=parseInt(prompt("enter a no"));
// if(a%2==0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// largest number among 3 nos

// #include<stdio.h>
// #include<conio.h>
// void main(){
    // int a,b,c;
    // clrscr();
    // printf("enter 3 nos:");
    // scanf("%d %d %d",a,b,c);
    // if(a>b && a>c){
        // printf("%d is largest",a);
    // }
    // else if(b>a && b>c){
        // printf("%d is largest",b);
    // }
    // else{
        // printf("%d is largest",c);
    // }
    // getch();
// }

// largest number among 3 nos using js

// var a=parseInt(prompt("enter no1"));
// var b=parseInt(prompt("enter no2"));
// var c=parseInt(prompt("enter no3"));
// if(a>b&&a>c){
//     console.log(`${a} is largest`);
// }
// else if(b>a&&b>c){
//     console.log(`${b} is largest`);
// }
// else{
//     console.log(`${c} is largest`);
// }

// posative or negative number
// #include<stdio.h>
// #include<conio.h>
// void main()
// {
    // int n
    // clrscr();
    // printf("enter a number");
    // scanf("%d",n);
    // if(n>0)
    // {
        // printf("%d is posative number");
    // }
    // else{
        // printf("%d is neagtive number");
    // }
    // getch();
// }

// // posative or negative number using js

// var a=parseInt(prompt("enter a number"));
// if(a>0)
// {
//     console.log(`${a} is positive number`);
// }
// else{
//     console.log(`${a} is negative number`);
// }

// sqrt of a number
// #include<stdio.h>
// #include<math.h>
// void main()
// {
    // int n;
    // double rslt;
    // clrscr();
    // printf("enter a number:");
    // scanf("%d",&n);
    // rslt=sqrt(n);
    // printf("sqrt of a number is :%f",rslt);
    // getch();
// }

// sqrt of a number using js

// var a=parseInt(prompt("enter a number"));
// var rslt=Math.sqrt(a);
// console.log(`sqrt of ${a} is ${rslt}`);

// swapping

// #include<stdio.h>
// #include<conio.h>
// void main()
// {
    // int a,b,temp=a;
    // clrscr();
    // printf("enter a:");
    // scanf("%d",a);
    // printf("enter b:");
    // scanf("%d",b);
    // a=b;
    // b=temp;
    // printf("after swapping a=%d and b=%d",a,b);
    // getch();
// }

// // swapping using js
// var n1=parseInt(prompt("enter no1"));
// var n2=parseInt(prompt("enter no2"));
// var temp=n1;
//  n1=n2;
// n2=temp;
// console.log(`after swapping n1 is ${n1} and n2 is ${n2}`);

// factorial of number
// #include<stdio.h>
// #include<conio.h>
// void main(){
    // int n,fact=1,i;
    // clrscr();
    // printf("enter a number:");
    // scanf("%d",&n);
    // for(i=1;i<=n;i++)
    // {
        // fact=fact*i;
    // }
    // printf("factorial of a number is:%d",fact);
    // getch();
// }
// factorial of number using js
// var n=parseInt(prompt("enter a number"));
// var fact=1;
// for(var i=1;i<=n;i++)
// {
//     fact=fact*i;
// }
// console.log(`factorial of ${n} is ${fact}`);

// fibonacci series

// #include<stdio.h>
// #include<conio.h>
// void main()
// {
    // int lim,a=0,b=1,c=1;
    // clrscr();
    // printf("enter the limit:");
    // scanf("%d",&lim);
    // printf("%d\n",a);
    // printf("%d\n",b);
    // while(c=<lim)
    // {
        // printf("%d\n",c);
        // a=b;
        // b=c;
        // c=a+b;

    // }
    // getch();
// }

// fibonacci series using js

// var lim=parseInt(prompt("enter a limit"));
// var a=0;
// var b=1;
// var c=1;
// console.log(a);
// console.log(b);
// while(c<=lim){
//     console.log(c);
//     a=b;
//     b=c;
//     c=a+b;
// }