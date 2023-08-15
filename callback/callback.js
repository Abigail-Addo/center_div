addEventListener("load", async (event) => {
    event.preventDefault();


const getUser = (callback) => {
  setTimeout( () => {
        callback(
            {
                name: 'Rashidatu',
                eyeColor: 'brown',
                age: '',
                height: '',
            }
         )
    

        }, 4000) 
    
        
}



const btn = document.querySelector('.submit');

btn.addEventListener('click', () => {

    //create new div for web page
    const div = document.createElement('div')

    //add class container to the new div created
    div.classList.add('container');

    //append the new div to the webpage
    document.body.appendChild(div);

    //call the function getUser to retreive user details
    // output the user details on webpage
    getUser(user => {
    div.innerHTML =  user.name
    });

});




});
