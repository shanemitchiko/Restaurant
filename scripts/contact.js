function checkValidity () {
    let {name, email, phone} = document.contact;
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validPhone = /((\(\d{3}\) ?)|(\d{3}-)) ?\d{3}-\d{4}$/;

    if(name.value === "" ) {
        name.focus() ;
        alert("Invalid Name - Please fill");
        return false;
    } else if (email.value === "" || !validEmail.test(email.value)) {
        email.focus();
        alert("Invalid Email - Please use the abc@xyz format");
        return false;
    } else if (phone.value === "" || !validPhone.test(phone.value)) {
        email.focus();
        alert("Invalid Phone - Please use either (###)###-#### or ###-###-#### formats");
        return false;
    } else {
        return true;
    }
}

function Send () {
    if (checkValidity()){
        alert("Thank you for reaching out to us. We will contact you shortly.");
    }
}

var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

