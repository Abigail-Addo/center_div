addEventListener("load", async (event) => {
    event.preventDefault();

    // const getUser = (callback) => {
    //     setTimeout(() => {
    //         callback(
    //             {
    //                 name: 'Rashidatu',
    //                 eyeColor: 'brown',
    //                 age: '',
    //                 height: '',
    //             }
    //         )

    //     }, 4000)
    // }

    const getFifaData = (football) => {
        setTimeout(() => {
            const fifa = [
                {
                    id: 1,
                    player: 'Lionel Messi',
                    country: 'Argentina',
                    age: 40
                },
                {
                    id: 2,
                    player: 'Marcus Rashford',
                    country: 'England',
                    age: 32
                },
                {
                    id: 3,
                    player: 'Wayne Rooney',
                    country: 'England',
                    age: 36
                },
                {
                    id: 4,
                    player: 'Christiano Ronaldo',
                    country: 'Portugal',
                    age: 42
                },
                {
                    id: 5,
                    player: 'Neymar',
                    country: 'Brazil',
                    age: 28
                },
            ];
            football(fifa);
        }, 3000);
    };

    const tableData = document.querySelector('.football-table');

    const show_player = (arr) => {

        let table = '<table border="1">';
        table += `<tr><th>ID</th><th>Name</th><th>Country</th><th>Age</th></tr>`;
        arr.forEach((player, index) => {
            table = table + `<tr>`;
            table = table + `<td> ${player.id}</td>`;
            table = table + `<td> ${player.player}</td>`;
            table = table + `<td> ${player.country}</td>`;
            table = table + `<td> ${player.age}</td>`;
            table += `</tr>`;
        });
        table += "</table>";


        tableData.innerHTML = table;
    };

    // show_player(fifa);



    const btn = document.querySelector('.submit');

    btn.addEventListener('click', () => {

        //create new div for web page
        const div = document.createElement('div')
        const text = document.createTextNode("Your favourite footballers")
        //add class container to the new div created
        div.classList.add('container');

        //append the new div to the webpage
        const header = document.querySelector(".header");
        div.appendChild(text);
        header.appendChild(div);

        // call the function getUser to retreive user details
        // output the user details on webpage
        // getUser(user => {
        //     div.innerHTML = user.eyeColor
        // });

        getFifaData(fifaData => {
            show_player(fifaData);
        });

    });
});