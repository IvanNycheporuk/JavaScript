const plates = document.querySelector('.plates');
const form = document.querySelector('.add-items');
var menuList = [];

if (localStorage.getItem('menu')) {
    menuList = JSON.parse(localStorage.getItem('menu'));
}

const renderMenu = (arr) => {
    if (arr.length === 0) {
        plates.innerHTML = `<li>Loading Tapas...</li>`;
        return;
    }

    let menu = arr.map((plate) => (
        `<li data-id="${plate.id}">
            <div class="_savedItem">      
                <input id="${plate.id}"  type="checkbox" />
                <label for="${plate.id}">${plate.value}</label>
                <div class="controls">
                    <button class="editBtn">
                        <svg height="401pt" viewBox="0 -1 401.52289 401" width="401pt" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>    
                    </button>        
                    <buttton class="removeBtn red">&#10008;</buttton>
                </div>
            </div>
            <div class="hidden _editedItem">
                <input type="text" value=${plate.value} />                
                <buttton class="saveChanges">&#10004;</buttton>
                <buttton class="cancelEdit red">&#10008;</buttton>
            </div>
        </li>`
    )).join('');

    plates.innerHTML = menu;
}

const addMenuItem = (e) => {
    e.preventDefault();
    menuList.push(
        {
            value: e.target.item.value,
            id: new Date().getTime() 
        }
    );

    form.reset();
    renderMenu(menuList);
    localStorage.setItem('menu', JSON.stringify(menuList));
}

const removeMenuItem = (id) => {
    let confirmRemove = confirm('please confirm removal'); 

    if(!confirmRemove){
        return;
    }

    menuList = menuList.filter(item => item.id != id);
    
    localStorage.setItem('menu', JSON.stringify(menuList));
    renderMenu(menuList);
}

const editMenuItem = (item) => {
    let currentValue = item.querySelector('label').innerText;
    item.querySelector('input[type="text"]').value = currentValue;

    toggleHidden(item);
}

const toggleHidden = (item) => {
    item.querySelector('._savedItem').classList.toggle('hidden');
    item.querySelector('._editedItem').classList.toggle('hidden');
}

const applyChages = (item) => {
    let currentValue = item.querySelector('input[type="text"]').value;

    let itemId = item.dataset.id;

    menuList = menuList.map(item => {
        if (item.id === +itemId) {
            item.value = currentValue;
            return item;
        }

        return item;
    })

    localStorage.setItem('menu', JSON.stringify(menuList));
    renderMenu(menuList);
}

renderMenu(menuList)

form.addEventListener('submit', addMenuItem);

plates.addEventListener('click', (e) => {
    let target = e.target;
    let targetItem = target.closest('li');

    if (target.matches('.removeBtn')) {          
        removeMenuItem(+targetItem.dataset.id);
    }

    if (target.matches('.editBtn')) {
        editMenuItem(targetItem);
    }

    if (target.matches('.saveChanges')) {
        applyChages(targetItem);
    }

    if (target.matches('.cancelEdit')) {
        toggleHidden(targetItem);
    }
})


// document.body.addEventListener('click', e => {
//     console.log(e.target);
// })

