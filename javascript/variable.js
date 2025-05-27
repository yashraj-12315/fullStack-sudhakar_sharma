"use strict";

function f1() {
  x = 10;
  document.write("x = " + x);
  var x; //hoisting - it's a mechanism where we can access the declared variable from any location, there is no order dependency. We can use it and declare variable later.
}
// f1();

function f2() {
  let x; //declaration
  x = 10; //assignment
  if (x == 10) {
    let y = 20; //initialization
    y = 30; //assignment
    document.write("x=" + x + "<br>y=" + y);
  }
  //block scope variables are accessible within the same block and to its inner block, this concept is known as closure.
}
// f2();

function f3() {
  let x; //declaration
  x = 10; //assignment
  if (x == 10) {
    var y = 20; //initialization
    y = 30; //assignment
    var y = 40; //shadowing- redeclaring same name identifier within the scope
    document.write("x=" + x + "<br>y=" + y);
  }
}
// f3();

function f4() {
  window.a = 50; // we can configure global variable inside function by using "window" object.
}
function f5() {
  document.write(a);
}
// f4();
// f5();
