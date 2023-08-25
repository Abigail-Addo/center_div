window.addEventListener('load', async (e) => {
    e.preventDefault();

    //get available items
    const allItems = await fetch('http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/items')
    const items = await allItems.json();

    //items is an array
    items.forEach(itm => {
        const container = document.querySelector('.item-container');
        const item = document.createElement('div')
        item.classList.add('item')
        item.id = itm.id
        item.innerHTML += `
            <h2> ${itm.name}</h2>
            <span class="material-symbols-outlined delete" >delete</span>
            `
        container.appendChild(item)
    })

    const addItem = document.querySelector('.add-item span')
    const itemContainer = document.querySelector('.item-container');


    addItem.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
            const item = document.querySelector('.add-item input').value;
            if (item === "" || item == null) {
                alert("please enter to do list item")
                return;
            }
            //code 
            document.querySelector('.add-item input').value = '';


            const url = 'http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/create-item'
            const postData = {
                name: item
            }
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set the content type to JSON
                },
                body: JSON.stringify(postData) // Convert user data to JSON string

            })
            const response = await result.json();
            console.log(response)

            if (result.status == 200 || result.status == 201) {
                // const response = await result.json();
                const item = document.createElement('div')
                item.classList.add('item')
                item.id = response.id

                item.innerHTML += `
                <h2>${response.name}</h2>
                <span class="material-symbols-outlined delete">delete</span>
            `;
                itemContainer.appendChild(item);
            }
        } catch (err) {
            console.error(err)
        }
    });

    const deleteBtn = document.querySelectorAll('.item-container span');
    
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const shouldDelete = confirm("Are you sure you want to delete this item?");
            if (shouldDelete === true) {
                const deleteUrl = `http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/item/${btn.id}`;

                try {
                    const deleteResult = fetch(deleteUrl, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    const item = document.querySelector('div.item');

                    if (deleteResult.status === 200 || deleteResult.status === 201) {
                        item.remove();
                        alert("Item deleted successfully");
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        });
    })

})