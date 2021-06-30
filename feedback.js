let myForm = document.getElementById("buttonsub");
myForm.addEventListener("click", (e) =>{
    if(document.getElementById("names").value == ""){
        e.preventDefault();
        swal("Please fill your name");
    }
    else if(document.getElementById("emails").value == ""){
        e.preventDefault();
        swal("Please fill your email");
    }
    else if(document.getElementById("messeges").value == ""){
        e.preventDefault();
        swal("Please fill your messege");
    }
    else{
        e.preventDefault();
        swal("Sent Successfully!");
        $('#myform').children('input').val('')
        $('#myform').children('textarea').val('')
    }
    
})

//function msg(){
    //alert("SAVED");
//    console.log("WOI");
//}

