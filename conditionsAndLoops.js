// Boolean operators: ==  >  <  >=  <=  Special operators: &&  ||
// 5 == 5 is a boolean expression that evaluates to true; 5 == 4 is a boolean expression that evaluates to false
// 5 > 4 evaluates to true
// && evaluates to true if both sides of it are true; so this needs a boolean value or expression on either side
   // 5 > 4 && 4 < 10  this evaluates to true
   // 5 > 4 && 4 > 10 this whole expression evaluates to false
//  || if one OR the other is true then expression evlauates to true
   // 4 > 10 || 1 == 1 left side is false but right side is true so whole expression is true

 // Conditional statements
   // Example of if statement  
var firstName = 'Sam';
if (firstName == 'Sam') {
   console.log('Hello, Sam!');
}
// if we change the value of firstName to 'Dora', then the console shows nothing

  // Example of if-else statements
  var firstName = 'Dora';
  if (firstName == 'Sam') {
     console.log('Hello, Sam!');
  } else {
     console.log('Hey, ' + firstName);
  }

    //Example of else-if statement
var costOfMilk = 2;

if (costOfMilk <2) {
   console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
   console.log('We will buy only 1 gallon');
} else {
   console.log('No thanks, way too expensive!');
}
  // if we change value of costOfMilk to 1.99; then the if statement is true and we'll get We will buy 2 gallons
  // if we change the value of costOfMilk to 3; then the if statement is false, the else-if statement is false and the else statement is true
  // and we'll get No thanks, etc.

  //Example of switch statement
var grade = 'C';
//we want to print out the ranges for any letter grade

switch(grade) {
   //here we insert the case; if it's 'C', do this, if it's 'A' do this, etc.
   case 'A': 
      console.log('90-100');
      break;
   case 'B':
      console.log('80-89');
      break;
   case 'C':
      console.log('70-79');
      break;
   default: 
      console.log('0-69');
}
   // console will show 70-79. If we change variable value to A, then console will show 90-100.
   // if have the variable assigned to A and we remove the break between case A and case B, then console will show 90-100 AND 80-89.
     // without the break, it just drops through to the next code to execute; it keeps going

// Example of nested if statements 
var a = 5;
var b = 6;

if (a == 5) {
   if (b == 6) {
      console.log('a is 5 and b is 6.');
   }
}
  // the above code is poorly written

  //example of using flattening to combine if statements using the logical && operator

  if (a == 5 && b ==6) {
     console.log('a is 5 and b is 6.');
  }
  // nesting if statements are OK if you have a diverging path based on the nesting condition
  // if the first condition is true, you will do something, but what you do depends on what the second condition is true or not.
  // if second condition is false then this causes a divergence. It's OK to use nested if statements.
  
  //Example of it being acceptable to use nested if statement;
var c = 7;
var d = 9;

  if (c == 7) {
    if (c == 8) {
      console.log('c is 7 and d is 8.');
    } else {
       console.log('c is 7 but d is not 8.');
    }   
}

  //above code is a divergent path so it's OK to use this nested if statement
  // always flatten nested if statements if there's nothing else inside the outer if statement. If it's just the inner if.







