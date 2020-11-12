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

// Задание выполнено верно, но не оптимально. Вы избыточно перебираете массив несколько раз - метод every сам по себе перебирает элементы массива, а внутри него на каждой итерации вы запускаете ещё один цикл. Для решения задачи достаточно перебрать массив только 1 раз :) Поэтому нужно использовать что-то одно - либо every, либо обычный цикл. Ниже напишу отдельно 2 этих варианта, чтобы вы могли разобрать оба:

// Вариант с every
console.log(arr.every(elem => arr[0] === elem));


// Вариант с for
let flag = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[0] !== arr[i]) {
    flag = false;
    break;
  }
}

console.log(flag);