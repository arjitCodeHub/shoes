const mobile_view = document.querySelector(".contact-button");
const nav_header = document.querySelector(".Form");
const toggleNavbar = () => {
    nav_header.classList.toggle("active")
}

mobile_view.addEventListener("click", () => toggleNavbar())



// form validation
function validation() {
    var user = document.getElementById('username').value;
    var mobile = document.getElementById('mobilenumber').value;
    var email = document.getElementById('emailid').value;
    if (user == "") {
        document.getElementById('user').innerHTML = "** Please fill the username field";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('user').innerHTML = "** User length must be between 2 and 20 letters";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('user').innerHTML = "** Only characters are available not number";
        return false;
    }
   
    // mobile number

    if (mobile == "") {
        document.getElementById('mobile').innerHTML = "** Please fill the mobile no field";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('mobile').innerHTML = "** Must write digits only not characters";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('mobile').innerHTML = "** Mobile number must be 10 digit only";
        return false;
    }

    //email 

    if (email == "") {
        document.getElementById('email').innerHTML = "** Please fill the email field";
        return false;
    }
    if (email.indexof('@') <= 0) {
        document.getElementById('email').innerHTML = "** @ Invalid position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')){
        document.getElementById('email').innerHTML = "** . Invalid position";
        return false;
    }
}