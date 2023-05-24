let listaSpesa = [
    'Fagioli',
    'Pancetta',
    'Whiskey',
    'Lardo',
    'Uova',
    'Altro whiskey'
];

let counter = 0;

while (counter < listaSpesa.length) {
    let listItem = document.createElement('li');
    listItem.textContent = listaSpesa[counter];
    document.getElementById('shopping-list').appendChild(listItem);
    counter++
}
