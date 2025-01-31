// Q 9. Find the output of the below code

function print(x) {
  if (x <= 1) {
    print(x + 1);
    console.log("x is if block is " + x);
  } else if (x >= 100000000000000) {
    console.log("x in else if block is " + x);
  }

  print(x + 1);
}

print(0);

// output : error Maximum callstack size is Exexuted
