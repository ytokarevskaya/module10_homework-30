var arr=[1,1,1,1,];
var k=arr[0];
let check = arr.every(function(elem, index){
for (let i=0; i < arr.length; i++){
  while(k!==arr[i])
  { return false;
  }
}
    return true;
  });
console.log(check);