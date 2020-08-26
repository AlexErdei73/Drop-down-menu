const items = document.querySelector('#items');
const button = document.querySelector('#menutitle');

items.classList.add('hideitems');

button.addEventListener('click', function(){
    if (items.classList.contains('hideitems')) {
        items.classList.remove('hideitems');
        items.classList.add('showitems');
    } else {
        items.classList.remove('showitems');
        items.classList.add('hideitems');
    }
})