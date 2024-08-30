let validation = {};
validation['username'] = false;
validation['email'] = false;
validation['password'] = false;
validation['conf_password'] = false;
validation['dob'] = false;
validation['gender'] = false;
validation['genre'] = false;
validation['country'] = false;

function change_input_outlines(element, status) {
    if (status == "invalid") {
        element.style.border = "3px dashed red";
    }
    else {
        element.style.border = "3px solid green";
    }
}

function set_icons(element, status) {
    if (status == "invalid") {
        element.querySelector('.fa-circle-check').style.visibility = "collapse";
        element.querySelector('.fa-circle-xmark').style.visibility = "visible";
    }
    else {


        element.querySelector('.fa-circle-xmark').style.visibility = "collapse";
        element.querySelector('.fa-circle-check').style.visibility = "visible";
    }
}

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

        validation['username'] = true;
        set_icons(document.getElementById('username_input_div'), "valid");
        change_input_outlines(user_inp, "valid");
    }
    //invalid
    else {
        validation['username'] = false;
        change_input_outlines(user_inp, "invalid");
        set_icons(document.getElementById('username_input_div'), "invalid");
    }
});

let email_inp = document.getElementById('email');
email_inp.addEventListener('input', () => {
    let email = email_inp.value;
    if (/^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/.test(email)) {


        validation['email'] = true;
        change_input_outlines(email_inp, "valid");
        set_icons(document.getElementById('email_input_div'), "valid");
    }
    else {


        validation['email'] = false;
        change_input_outlines(email_inp, "invalid");
        set_icons(document.getElementById('email_input_div'), "invalid");
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

        validation['password'] = true;
        change_input_outlines(pass_inp, "valid");
        set_icons(document.getElementById('password_input_div'), "valid");
    }
    else {
        validation['password'] = false;
        change_input_outlines(pass_inp, "invalid");
        set_icons(document.getElementById('password_input_div'), "invalid");
    }

    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
    }
    else {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
    }

});

let conf_pass_inp = document.getElementById('conf-password');
conf_pass_inp.addEventListener('input', () => {
    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
    }
    else {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
    }

});

let submitBtn = document.getElementById('submit');

const submitBtn_mouseover = () => {
    submitBtn.style.backgroundColor = "#0056b3";
}
const submitBtn_mouseleave = () => {
    submitBtn.style.backgroundColor = "#007bff";
}

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
            submitBtn.removeEventListener('mouseover', submitBtn_mouseover);
            submitBtn.removeEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.style.backgroundColor = "grey";
            submitBtn.style.transition = "none";
            validation["dob"] = false;
            change_input_outlines(document.getElementById('dob'), "invalid");
            set_icons(document.getElementById('dob_input_div'), "invalid");
        }
        else {
            submitBtn.disabled = false;
            submitBtn.removeEventListener('mouseenter', submitBtn_mouseover);
            submitBtn.removeEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.addEventListener('mouseover', submitBtn_mouseover);
            submitBtn.addEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.style.backgroundColor = "#007bff";
            validation["dob"] = true;
            submitBtn.style.transition = "background-color 0.3s ease";

            change_input_outlines(document.getElementById('dob'), "valid");
            set_icons(document.getElementById('dob_input_div'), "valid");
        }
    },
    autoclose: true,
    maxDate: new Date(),
    changeMonth: true,
    changeYear: true,
    showOtherMonths: true,
    selectOtherMonths: true
});

let gender_inp = document.getElementsByName('gender');
gender_inp.forEach((item) => {
    item.addEventListener('change', () => {
        validation["gender"] = true;

        set_icons(document.getElementById('gender_option_div'), "valid");
    });
});

let genre_inp = document.getElementsByName('genre');
genre_inp.forEach((items) => {
    items.addEventListener('change', () => {
        let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (count >= 3) {
            validation['genre'] = true;
            set_icons(document.getElementById('genre_input_div'), "valid");
        }
        else {
            validation['genre'] = false;
            set_icons(document.getElementById('genre_input_div'), "invalid");
        }
    });
});

let country_inp = document.getElementById('country');
country_inp.addEventListener('change', () => {
    if (country_inp.value != "") {
        validation['country'] = true;
        set_icons(document.getElementById('country_input_div'), "valid");
    }
    else {
        validation['country'] = false;
        set_icons(document.getElementById('country_input_div'), "invalid");
    }

});

submitBtn.addEventListener('click', () => {

});