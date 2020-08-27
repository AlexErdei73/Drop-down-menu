
export function DropDownMenu(container, onItemClick) {
    this.container = container;
    this.onItemClick = onItemClick;
    const list = container.querySelector('#items');
    const button = container.querySelector('#menutitle');

    list.classList.add('hideitems');

    button.addEventListener('click', () => {
        if (list.classList.contains('hideitems')) {
            list.classList.remove('hideitems');
            list.classList.add('showitems');
        } else {
            list.classList.remove('showitems');
            list.classList.add('hideitems');
        }
    })

    const items = list.querySelectorAll('li');
    items.forEach((li) => {
        li.addEventListener('click', this.onItemClick);
    })
        
}


const menu = new DropDownMenu(document.querySelector('#dropdownmenu'), onMenuItemClick);

function onMenuItemClick(e) {
    const result = document.querySelector('#result');
    result.textContent = e.target.textContent;
}



