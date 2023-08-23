
const container = document.querySelector(".container");

async function getAllUsers() {
    const response = await fetch('http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/all-users');
    const data = await response.json();

    console.log(data);

    data.forEach(user => {

        function createUserItem() {

            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            const header = document.createElement('h3');

            // edit icon
            const editIcon = document.createElement('i');
            editIcon.classList.add('fas', 'fa-edit');
            userItem.appendChild(editIcon);

            // delete icon
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fas', 'fa-trash');
            userItem.appendChild(deleteIcon);

            // name
            header.innerHTML = user.firstname + " " + user.lastname;
            userItem.appendChild(header);
            container.appendChild(userItem);

            // email
            const para = document.createElement('p');
            para.innerHTML = user.email;
            userItem.appendChild(para);
            container.appendChild(userItem);
            // school
            const para_two = document.createElement('p');
            para_two.innerHTML = user.school;
            userItem.appendChild(para_two);
            container.appendChild(userItem);

            // contact
            const para_three = document.createElement('p');
            para_three.innerHTML = user.contact;
            userItem.appendChild(para_three);
            container.appendChild(userItem);
        } createUserItem()
    });

}





getAllUsers();



