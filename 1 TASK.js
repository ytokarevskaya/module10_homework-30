let setValue = prompt("Введите значение: ");
if (setValue !== null) {
  let num = +setValue;
  console.log(typeof num);
  if (isNaN(num)) {
    console.log("Кажется вы ошиблись, попробуйте еще раз");
  } else if (num % 2 == 0) {
    console.log("четное");
  } else if (setValue % 2 !== 0) {
    console.log("нечетное");
  } else {
    console.log("Кажется вы ошиблись, попробуйте еще раз");
  }
}