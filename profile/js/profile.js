// ------------------- wait for all element to load ------------------- 
$(function () {
    let initEmail = $("p#email");
    let initName = $("p#name");
    let initContact = $("p#contact");
    let initSchool = $("p#school");

    const params = new URLSearchParams(window.location.search);

    if (params.has("email")) {

        initEmail.text("");
        initEmail.text(params.get("email"));

    }
    if (params.has("name")) {
        initName.text("");
        initName.text(params.get("name"));
    }
    if (params.has("contact")) {
        initContact.text("");
        initContact.text(params.get("contact"));
    }
    if (params.has("school")) {
        initSchool.text("");
        initSchool.text(params.get("school"));
    }
    else {
        console.log("The param myParam is not present.");
    };

    //logout
    const logout = document.querySelector(".logout");
    logout.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });

       //edit
       const edit = document.querySelector("svg.bi-pencil-fill");
       edit.addEventListener("click", function (e) {
           e.preventDefault();
           window.location.href = "user.html";
       });
   

    // console.log("main javascript file is working")

    // change image
    const uploadButton = document.querySelector(".image .camera");
    uploadButton.addEventListener("click", function () {
        document.querySelector("input[type=file]").click();
        $("input[type=file]").on("change", function () {
            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#image").attr("src", e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        });
    });
    // changing the personal contact to contact

    setInterval(() => {

        const width = window.innerWidth;

        if (width <= 425) {

            const contactLabel = document.querySelector("div.formControl.contact > label");
            $(contactLabel).text('');
            $(contactLabel).text('Contact');

        }

    }, 4000);

    $(".submitUpdate").click(function (e) {
        e.preventDefault();
        //---------------- post data to server -----------------------
        (async () => {
            console.log("self invoking function is working")



            //----------- get form data-------------
            const fn = document.querySelector('input#firstname').value
            const ln = document.querySelector('input#lastname').value
            const school_right = document.querySelector("input#school").value;
            const email_right = document.querySelector("input#email").value;
            const phone_right = document.querySelector("input#contact").value;

            if (fn == '' || ln == '' || email == '' || school_right == '' || email_right == '' || phone_right == '') {
                alert('please fill all fields')

                return
            }

            const postData = {
                firstname: fn,
                lastname: ln,
                email: email_right,
                school: school_right,
                contact: phone_right,
            }

            // console.log(postData)

            console.log(fn)

            try {
                // const url = 'http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/user'

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Set the content type to JSON
                    },
                    body: JSON.stringify(postData) // Convert user data to JSON string
                };
                const result = await fetch('http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/user', requestOptions)//fetch ends here

                let res = await result.json();
                console.log(res);

                document.querySelector('p#name').innerHTML = res.firstname + ' ' + res.lastname;
                document.querySelector('p#email').innerHTML = res.email;
                document.querySelector('p#school').innerHTML = res.school;
                document.querySelector('p#contact').innerHTML = res.contact;


            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
        })
            ();

    });


});

         //------------------ ajax approach ---------------
            // $.ajax({
            //   type: "POST",
            //   url: "http://localhost:8000/api/user",
            //   dataType : "json",
            //   contentType: "application/json; charset=utf-8",
            //   data: JSON.stringify(postData),
            //   success: function (response) {
            //     console.log(response)
            //   }
            // });


            
    // form update
    // $('.submitUpdate').click(function (e) {
    //     e.preventDefault();

    //     const editHeader = document.querySelector('header h3');
    //     editHeader.style.display = 'none';

    //     let student_name = $('p#name');
    //     let school = $('p#school');
    //     let profile_email = $('p#email');
    //     let profile_phone = $('p#contact');


    //     let first_name = $('input#firstname').val();
    //     let last_name = $('input#lastname').val();
    //     let school_name = $('input#school').val();
    //     let email = $('input#email').val();
    //     let phone = $('input#contact').val();

    //     student_name.text('');
    //     student_name.text(first_name + " " + last_name);
    //     school.text('');
    //     school.text(school_name);
    //     profile_email.text('');
    //     profile_email.text(email);
    //     profile_phone.text('');
    //     profile_phone.text(phone);
    // });


    // ------------------- wait for all element to load ends ------------------- 
