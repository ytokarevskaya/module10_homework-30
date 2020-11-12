let x = 5;

switch (typeof x){
    case 'number':
        console.log('X - число');
        break;
   case 'string':
        console.log('X - строка');
        break;
   case 'boolean':
        console.log('X - логический тип');
        break;
  default:
        console.log('Тип x не определён');
}

// Задание выполнено не верно. В операторе switch вы перебираете значения переменной x, что не верно, т.к. значение может быть абсолютно любым, и невозможно перечислить их все. Проверять нужно именно тип, т.е. воспользоваться оператором typeof. Выше исправила