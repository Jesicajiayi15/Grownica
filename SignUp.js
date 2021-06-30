let signUp = document.getElementById("signup");
signUp.addEventListener("click", (e) =>{
    if(document.getElementById("pass").value == document.getElementById("conpass")){
        e.preventDefault();
        swal("Password and Confirm password does not match");
    }
})