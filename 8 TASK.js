let myMap = new Map ();
myMap.set ('name:', 'Elizabet');
myMap.set ('age:', 10);
myMap.set ('occupation:','study at school');

function printmyMap(){
    myMap.forEach((value, key) =>{
        console.log(`Ключ - ${key}, значение - ${value}`);
    })
}
printmyMap();
