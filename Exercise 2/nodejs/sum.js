// Write a program that calculates the sum
// of all command line arguments that
// are passed in when starting the program.
//
// For example:
// node sum.js 1 2 3
// 6

//process.argv is the array containing the command line args
//loop is started from 2 because process.argv has the first 2 elemnts of array as ['path/to/node.exe', 'path/to/js/file', ...]

var sum = 0;
for(var i =2; i<process.argv.length; i++){
  //converting to number because process.argv is a string
  sum = sum + Number(process.argv[i]);
}

console.log(sum);
