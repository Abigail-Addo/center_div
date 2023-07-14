
// Password visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute('type') === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye")
});

// ------------------- wait for all element to load ------------------- 
$(document).ready(function () {


    console.log("main javascript file is working")

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

    $('.submitUpdate').click(function (e) {
        e.preventDefault();

        let student_name = $('p#name');
        let school = $('p#school');
        let profile_email = $('p#email');
        let profile_phone = $('p#contact');


        let first_name = $('input#firstname').val();
        let last_name = $('input#lastname').val();
        let school_name = $('input#school').val();
        let email = $('input#email').val();
        let phone = $('input#contact').val();

        student_name.text('');
        student_name.text(first_name + " " + last_name);
        school.text('');
        school.text(school_name);
        profile_email.text('');
        profile_email.text(email);
        profile_phone.text('');
        profile_phone.text(phone);
    });
});

    // ------------------- wait for all element to load ends ------------------- 
