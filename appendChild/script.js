const text = document.querySelector("#text");

text.addEventListener('keyup', (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click;

        const card = document.querySelector(".card");
        const textArea = document.querySelector("#text").value;
        const p = document.createElement("p");
        const textAnswer = document.createTextNode(textArea);
        p.appendChild(textAnswer);
        card.appendChild(p);
        setTimeout(() => {
            document.querySelector("#text").value = "";
        });
    };

});