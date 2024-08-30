let validation = {};
validation['username'] = false;
validation['email'] = false;
validation['password'] = false;
validation['conf_password'] = false;
validation['dob'] = false;

function change_input_outlines(element, status) {
    if (status == "invalid") {
        element.style.border = "3px dashed red";
        element.querySelector('.fa-circle-xmark').style.visibility = "collapse";
        element.querySelector('.fa-circle-check').style.visibility = "visible";
    }
    else {
        element.style.border = "3px solid green";
        element.querySelector('.fa-circle-check').style.visibility = "collapse";
        element.querySelector('.fa-circle-xmark').style.visibility = "visible";
    }
}

document.getElementById('submit').addEventListener('click', () => {

});

let user_inp = document.getElementById('username');
user_inp.addEventListener('input', () => {
    let username = user_inp.value;
    let strRegex = new RegExp(/^[a-zA-Z0-9 ]+$/i);

    let min_length = username.trim().length > 3;
    let max_length = username.trim().length <= 12;
    let not_empty_string = username.trim() != "";
    let alphanumeric = strRegex.test(username);
    let three_aplha_chars = username.match(/[a-zA-Z]/g).length > 3;

    //valid
    if (min_length && max_length && not_empty_string && alphanumeric && three_aplha_chars) {
        document.getElementById('username_input_div').querySelector('.fa-circle-xmark').style.visibility = "collapse";
        document.getElementById('username_input_div').querySelector('.fa-circle-check').style.visibility = "visible";

        validation['username'] = true;
        change_input_outlines(user_inp, "valid");
    }
    //invalid
    else {
        document.getElementById('username_input_div').querySelector('.fa-circle-check').style.visibility = "collapse";
        document.getElementById('username_input_div').querySelector('.fa-circle-xmark').style.visibility = "visible";

        validation['username'] = false;
        change_input_outlines(user_inp, "invalid");
    }
});

let email_inp = document.getElementById('email');
email_inp.addEventListener('input', () => {
    let email = email_inp.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email_input_div').querySelector('.fa-circle-xmark').style.visibility = "collapse";
        document.getElementById('email_input_div').querySelector('.fa-circle-check').style.visibility = "visible";

        validation['email'] = true;
        change_input_outlines(email_inp, "valid");
    }
    else {
        document.getElementById('email_input_div').querySelector('.fa-circle-check').style.visibility = "collapse";
        document.getElementById('email_input_div').querySelector('.fa-circle-xmark').style.visibility = "visible";

        validation['email'] = false;
        change_input_outlines(email_inp, "invalid");
    }
});

let pass_inp = document.getElementById('password');
pass_inp.addEventListener('input', () => {
    let password = pass_inp.value;
    let has_upper_letters = /[A-Z]/.test(password);
    let has_lower_letters = /[a-z]/.test(password);
    let has_num = /[0-9]/.test(password);
    let has_special = /[!@#$%^&*()]/.test(password);

    if (has_lower_letters && has_upper_letters && has_num && has_special && password.length > 8) {
        document.getElementById('password_input_div').querySelector('.fa-circle-xmark').style.visibility = "collapse";
        document.getElementById('password_input_div').querySelector('.fa-circle-check').style.visibility = "visible";

        validation['password'] = true;
        change_input_outlines(pass_inp, "valid");
    }
    else {
        document.getElementById('password_input_div').querySelector('.fa-circle-check').style.visibility = "collapse";
        document.getElementById('password_input_div').querySelector('.fa-circle-xmark').style.visibility = "visible";

        validation['password'] = false;
        change_input_outlines(pass_inp, "invalid");
    }

    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-xmark').style.visibility = "collapse";
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-check').style.visibility = "visible";

        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
    }
    else {
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-check').style.visibility = "collapse";
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-xmark').style.visibility = "visible";

        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
    }

});

let conf_pass_inp = document.getElementById('conf-password');
conf_pass_inp.addEventListener('input', () => {
    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-xmark').style.visibility = "collapse";
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-check').style.visibility = "visible";

        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
    }
    else {
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-check').style.visibility = "collapse";
        document.getElementById('conf-password_input_div').querySelector('.fa-circle-xmark').style.visibility = "visible";

        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
    }

});

let dob_inp = document.getElementById('dob');
dob_inp.addEventListener('click', () => {

});

let submitBtn = document.getElementById('submit');

//JQuery
$('#dob').datepicker({
    dateFormat: 'yy-mm-dd',
    onSelect: function (dateText) {
        let jdate = dateText;
        let selDate = new Date(jdate);

        let curDate = new Date();
        var age = curDate.getFullYear() - selDate.getFullYear();


        //birthday hasn't occurred yet
        var monthDifference = curDate.getMonth() - selDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && curDate.getDate() < selDate.getDate())) {
            age--;
        }

        if (age < 18) {
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = "grey";
        }
        else {
            document.getElementById('submit').disabled = false;
            submitBtn.style.backgroundColor = "#007bff";
        }
    },
    autoclose: true,
});