let myMap = new Map ();
myMap.set ('name:', 'Elizabet');
myMap.set ('age:', 10);
myMap.set ('occupation:','study at school');

for (let name of myMap.keys()){
  console.log (`ключ - ${name}`);
}
for (let value of myMap.values()){
  console.log (`значение - ${value}`);
}