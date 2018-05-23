for(i=1;i<=100;i++)
{
    if(((i%3)===0)&&((i%5)!==0))//if the number is divisible only by 3, fizz is printed along with number 
    console.log(i + " fizz");
    else if(((i%5)===0)&&(((i%3)!==0)))//if the number is only divisible by 5, buzz is printed along with the number.
    console.log(i+" buzz");
    else if(((i%5)===0)&&(((i%3)===0)))//if the number is divisible by both 3 and 5,it prints fizzbuzz.
    console.log(i + " fizzbuzz")
    else //if noone of the conditions satisfy,it only prints the number.
    console.log(i);
}