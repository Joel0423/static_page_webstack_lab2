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
        element.classList.add('border-red-700');
        element.classList.remove('border-green-600');
    }
    else {
        element.classList.remove('border-red-700');
        element.classList.add('border-green-600');
    }
}

function set_icons(element, status) {
    if (status == "invalid") {
        element.querySelector('.fa-circle-check').classList.add('collapse');
        element.querySelector('.fa-circle-check').classList.remove('visible');
        element.querySelector('.fa-circle-xmark').classList.add('visible');
        element.querySelector('.fa-circle-xmark').classList.remove('collapse');
    }
    else {
        element.querySelector('.fa-circle-check').classList.remove('collapse');
        element.querySelector('.fa-circle-check').classList.add('visible');
        element.querySelector('.fa-circle-xmark').classList.remove('visible');
        element.querySelector('.fa-circle-xmark').classList.add('collapse');
    }
}

user_error_p = document.getElementById('username_error');
email_error_p = document.getElementById('email_error');
pass_error_p = document.getElementById('password_error');
conf_pass_error_p = document.getElementById('conf_password_error');
dob_error_p = document.getElementById('dob_error');
gender_error_p = document.getElementById('gender_error');
genre_error_p = document.getElementById('genre_error');
country_error_p = document.getElementById('country_error');

const user_error_msg = "Username must be between 3-12 characters - Only letters and numbers - Must have 3 alphabets";
const pass_error_msg = "Password must be at least 8 characters - must have uppercase, lowercase, special and numbers";
const conf_pass_error_msg = "Passwords do not match";
const email_error_msg = "Enter a valid email";
const dob_error_msg = "Only 18 years or older can register";
const gender_error_msg = "Select a gender";
const genre_error_msg = "Select at least 3 categories";
const country_error_msg = "Select your country";


function set_error_msg(element, message) {
    element.textContent = message;
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
        set_error_msg(user_error_p, "");
    }
    //invalid
    else {
        validation['username'] = false;
        change_input_outlines(user_inp, "invalid");
        set_icons(document.getElementById('username_input_div'), "invalid");
        set_error_msg(user_error_p, user_error_msg);
    }
});

let email_inp = document.getElementById('email');
email_inp.addEventListener('input', () => {
    let email = email_inp.value;
    if (/^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/.test(email)) {


        validation['email'] = true;
        change_input_outlines(email_inp, "valid");
        set_icons(document.getElementById('email_input_div'), "valid");
        set_error_msg(email_error_p, "");
    }
    else {


        validation['email'] = false;
        change_input_outlines(email_inp, "invalid");
        set_icons(document.getElementById('email_input_div'), "invalid");
        set_error_msg(email_error_p, email_error_msg);
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
        set_error_msg(pass_error_p, "");
    }
    else {
        validation['password'] = false;
        change_input_outlines(pass_inp, "invalid");
        set_icons(document.getElementById('password_input_div'), "invalid");
        set_error_msg(pass_error_p, pass_error_msg);
    }

    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
        set_error_msg(conf_pass_error_p, "");
    }
    else {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
        set_error_msg(conf_pass_error_p, conf_pass_error_msg);
    }

});

let conf_pass_inp = document.getElementById('conf-password');
conf_pass_inp.addEventListener('input', () => {
    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
        set_error_msg(conf_pass_error_p, "");
    }
    else {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
        set_error_msg(conf_pass_error_p, conf_pass_error_msg);
    }

});

let submitBtn = document.getElementById('submitBtn');

/* const submitBtn_mouseover = () => {
    submitBtn.style.backgroundColor = "#0056b3";
}
const submitBtn_mouseleave = () => {
    submitBtn.style.backgroundColor = "#007bff";
} */

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
            /* submitBtn.removeEventListener('mouseover', submitBtn_mouseover);
            submitBtn.removeEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.style.backgroundColor = "grey";
            submitBtn.style.transition = "none"; */
            submitBtn.classList.remove('bg-cyan-600');
            submitBtn.classList.add('bg-gray-400');
            submitBtn.classList.remove('transition');
            submitBtn.classList.remove('hover:bg-red-500');
            validation["dob"] = false;
            change_input_outlines(document.getElementById('dob'), "invalid");
            set_icons(document.getElementById('dob_input_div'), "invalid");
            set_error_msg(dob_error_p, dob_error_msg);
        }
        else {
            submitBtn.disabled = false;/*
            submitBtn.removeEventListener('mouseenter', submitBtn_mouseover);
            submitBtn.removeEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.addEventListener('mouseover', submitBtn_mouseover);
            submitBtn.addEventListener('mouseleave', submitBtn_mouseleave);
            submitBtn.style.backgroundColor = "#007bff"; */
            submitBtn.classList.remove('bg-gray-400');
            submitBtn.classList.add('bg-cyan-600');
            submitBtn.classList.add('transition');
            submitBtn.classList.add('hover:bg-red-500');
            validation["dob"] = true;
            /* submitBtn.style.transition = "background-color 0.3s ease"; */

            change_input_outlines(document.getElementById('dob'), "valid");
            set_icons(document.getElementById('dob_input_div'), "valid");
            set_error_msg(dob_error_p, "");
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
        set_error_msg(gender_error_p, "");
    });
});

let genre_inp = document.getElementsByName('genre');
genre_inp.forEach((items) => {
    items.addEventListener('change', () => {
        let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (count >= 3) {
            validation['genre'] = true;
            set_icons(document.getElementById('genre_input_div'), "valid");
            set_error_msg(genre_error_p, "");
        }
        else {
            validation['genre'] = false;
            set_icons(document.getElementById('genre_input_div'), "invalid");
            set_error_msg(genre_error_p, genre_error_msg);
        }
    });
});

let country_inp = document.getElementById('country');
country_inp.addEventListener('change', () => {
    if (country_inp.value != "") {
        validation['country'] = true;
        change_input_outlines(country_inp, "valid");
        set_icons(document.getElementById('country_input_div'), "valid");
        set_error_msg(country_error_p, "");
    }
    else {
        validation['country'] = false;
        change_input_outlines(country_inp, "invalid");
        set_icons(document.getElementById('country_input_div'), "invalid");
        set_error_msg(country_error_p, country_error_msg);
    }

});

function submit_form() {
    if (validation['username'] && validation['email'] && validation['password'] && validation['conf_password'] && validation['dob'] && validation['gender'] && validation['genre'] && validation['country']) {
        alert("Registration Successful!");
        document.getElementById('register_form').submit();
    }
    else {
        if (!validation['username']) {
            change_input_outlines(user_inp, "invalid");
            set_icons(document.getElementById('username_input_div'), "invalid");
            set_error_msg(user_error_p, user_error_msg);
        }
        if (!validation['password']) {
            change_input_outlines(pass_inp, "invalid");
            set_icons(document.getElementById('password_input_div'), "invalid");
            set_error_msg(pass_error_p, pass_error_msg);
        }
        if (!validation['conf_password']) {
            change_input_outlines(conf_pass_inp, "invalid");
            set_icons(document.getElementById('conf-password_input_div'), "invalid");
            set_error_msg(conf_pass_error_p, conf_pass_error_msg);
        }
        if (!validation['email']) {
            change_input_outlines(email_inp, "invalid");
            set_icons(document.getElementById('email_input_div'), "invalid");
            set_error_msg(email_error_p, email_error_msg);
        }
        if (!validation['dob']) {
            change_input_outlines(document.getElementById('dob'), "invalid");
            set_icons(document.getElementById('dob_input_div'), "invalid");
            set_error_msg(dob_error_p, dob_error_msg);
        }
        if (!validation['gender']) {
            set_icons(document.getElementById('gender_option_div'), "invalid");
            set_error_msg(gender_error_p, gender_error_msg);
        }
        if (!validation['genre']) {
            set_icons(document.getElementById('genre_input_div'), "invalid");
            set_error_msg(genre_error_p, genre_error_msg);
        }
        if (!validation['country']) {
            change_input_outlines(country_inp, "invalid");
            set_icons(document.getElementById('country_input_div'), "invalid");
            set_error_msg(country_error_p, country_error_msg);
        }
    }
}

submitBtn.addEventListener('click', submit_form);

window.onbeforeunload = () => {
    document.getElementById('register_form').reset();
}