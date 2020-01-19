
let form = document.getElementById('checkValidation');
    form.addEventListener('submit' , function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
               alert("Thank you for reaching out to us. We will contact you shortly.") 
        }
    } )
