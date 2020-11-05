var arr = [1, 3, 0, '', 8, 16];
var s=0;
var m=0;
var n=0;

for (let i=0; i < arr.length; i++){
  if (arr[i] === 0){
    n++;
  } else if (arr[i] % 2 == 0 && arr[i] != 0 && arr[i] != ''){
    s++;
  }
else if (arr[i] % 2 !== 0 && arr[i] != 0 && arr[i] != ''){
    m++;
}
}
console.log(`number of null elements in array is: ${n}`);

console.log(`number of even elements in array is: ${s}`);
  
console.log(`number of odd elements in array is: ${m}`);