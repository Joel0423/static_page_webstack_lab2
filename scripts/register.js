/* Dictionary that stores the validation state of all the componenets of the form
it is set to false by default */
let validation = {};
validation['username'] = false;
validation['email'] = false;
validation['password'] = false;
validation['conf_password'] = false;
validation['dob'] = false;
validation['gender'] = false;
validation['genre'] = false;
validation['country'] = false;
validation['profile_pic'] = false;
validation['bio'] = false;


/* this function is used to take the HTML input elements and 
Add the tailwind border classes to make it a red or green border based on validation state */
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

/* This function takes the HTML input elements and sets the X mark or tick mark from font awesome
based on the validation state of the input */
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

/* List of <p> tags that will contain the error message 
They will be displayed below the HTML fprm inputs */
user_error_p = document.getElementById('username_error');
email_error_p = document.getElementById('email_error');
pass_error_p = document.getElementById('password_error');
conf_pass_error_p = document.getElementById('conf_password_error');
dob_error_p = document.getElementById('dob_error');
gender_error_p = document.getElementById('gender_error');
genre_error_p = document.getElementById('genre_error');
country_error_p = document.getElementById('country_error');
pic_error_p = document.getElementById('pic_error');
bio_error_p = document.getElementById('bio_error');

//List of error message strings that will be entered into the error <p> tags if there is any error in validation
const user_error_msg = "Username must be between 3-12 characters - Only letters and numbers - Must have 3 alphabets";
const pass_error_msg = "Password must be at least 8 characters - must have uppercase, lowercase, special and numbers";
const conf_pass_error_msg = "Passwords do not match";
const email_error_msg = "Enter a valid email";
const dob_error_msg = "Only 18 years or older can register";
const gender_error_msg = "Select a gender";
const genre_error_msg = "Select at least 3 categories";
const country_error_msg = "Select your country";
const pic_error_msg = "Select an image file";
const bio_error_msg = "Enter a few lines for your bio";

/* Function that takes the error <p> tag for a form input that has some error and sets the 
error message */
function set_error_msg(element, message) {
    element.textContent = message;
}

let user_inp = document.getElementById('username');
//Event Listener for username input field
user_inp.addEventListener('input', () => {
    //values entered by used
    let username = user_inp.value;
    //regex to take only alphanumeric characters and spaces
    let strRegex = new RegExp(/^[a-zA-Z0-9 ]+$/i);
    //minimum length of username is 4
    let min_length = username.trim().length > 3;
    //maximum length of username is 12
    let max_length = username.trim().length <= 12;
    //condition to check if entered value is only spaces
    let not_empty_string = username.trim() != "";
    //condition to store result of the alphanumeric regex
    let alphanumeric = strRegex.test(username);
    //condition that checks if at least 3 alphanumeric characters are there with a regex
    let three_aplha_chars = username.match(/[a-zA-Z]/g).length > 3;

    //username entered is valid
    if (min_length && max_length && not_empty_string && alphanumeric && three_aplha_chars) {
        //set validation to true
        validation['username'] = true;
        //set the green border, tick mark and remove error message
        set_icons(document.getElementById('username_input_div'), "valid");
        change_input_outlines(user_inp, "valid");
        set_error_msg(user_error_p, "");
    }
    //username entered is invalid
    else {
        //set validation to false
        validation['username'] = false;
        //set the red border, X mark and add error message
        change_input_outlines(user_inp, "invalid");
        set_icons(document.getElementById('username_input_div'), "invalid");
        set_error_msg(user_error_p, user_error_msg);
    }
});


//Event Listener for email input field
let email_inp = document.getElementById('email');
email_inp.addEventListener('input', () => {
    let email = email_inp.value;

    /* Regex is used to check if first set of characters are anything except @ symbol
    followed by the @ symbol for emails
    another set of characters except the @ symbol
    followed by .
    followed by at least two characters that are not @ symbol */
    //valid input- 
    if (/^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/.test(email)) {
        //validation to true
        validation['email'] = true;
        //green border, tick mark and remove error message
        change_input_outlines(email_inp, "valid");
        set_icons(document.getElementById('email_input_div'), "valid");
        set_error_msg(email_error_p, "");
    }
    else //invalid input-
    {
        //validation to false
        validation['email'] = false;
        //red border, X mark and error message
        change_input_outlines(email_inp, "invalid");
        set_icons(document.getElementById('email_input_div'), "invalid");
        set_error_msg(email_error_p, email_error_msg);
    }
});


//Event Listener for password input field, also checks confirm password field for matching password
let pass_inp = document.getElementById('password');
pass_inp.addEventListener('input', () => {
    let password = pass_inp.value;
    //bool to store if uppercase letters are matched by the regex
    let has_upper_letters = /[A-Z]/.test(password);
    //bool to store if lowercase letters are matched by the regex
    let has_lower_letters = /[a-z]/.test(password);
    //bool to store if numbers are matched by the regex
    let has_num = /[0-9]/.test(password);
    //bool to store if special characters are matched by the regex
    let has_special = /[!@#$%^&*()]/.test(password);

    //valid password-
    if (has_lower_letters && has_upper_letters && has_num && has_special && password.length > 8) {

        validation['password'] = true;
        change_input_outlines(pass_inp, "valid");
        set_icons(document.getElementById('password_input_div'), "valid");
        set_error_msg(pass_error_p, "");
    }
    else //invalid password-
    {
        validation['password'] = false;
        change_input_outlines(pass_inp, "invalid");
        set_icons(document.getElementById('password_input_div'), "invalid");
        set_error_msg(pass_error_p, pass_error_msg);
    }

    //simultaneously checking the confirm password field
    //valid input in conf password
    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
        set_error_msg(conf_pass_error_p, "");
    }
    else //invalid input-
    {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
        set_error_msg(conf_pass_error_p, conf_pass_error_msg);
    }

});


//Event Listener for confirm password field
let conf_pass_inp = document.getElementById('conf-password');
conf_pass_inp.addEventListener('input', () => {
    //checking if passwords in both fields are the same
    //valid input-
    if (conf_pass_inp.value == pass_inp.value && validation['password'] == true) {
        validation['conf_password'] = true;
        change_input_outlines(conf_pass_inp, "valid");
        set_icons(document.getElementById('conf-password_input_div'), "valid");
        set_error_msg(conf_pass_error_p, "");
    }
    else //invalid input-
    {
        validation['conf_password'] = false;
        change_input_outlines(conf_pass_inp, "invalid");
        set_icons(document.getElementById('conf-password_input_div'), "invalid");
        set_error_msg(conf_pass_error_p, conf_pass_error_msg);
    }

});

//variable to store the submit button
let submitBtn = document.getElementById('submitBtn');

//JQuery DatePicker component to select the DOB
$('#dob').datepicker({
    //sets the format to YYYY-MM-DD
    dateFormat: 'yy-mm-dd',
    //onSelect property defines a function to run whenever a date is selected. It is a listener for the select event
    onSelect: function (dateText) {
        //dateText is the unformatted form of the selected date
        let jdate = dateText;
        //converting the selected date to a JavaScript date object
        let selDate = new Date(jdate);
        //Gets the current date
        let curDate = new Date();
        //age will be current date - selected date
        var age = curDate.getFullYear() - selDate.getFullYear();

        //birthday hasn't occurred yet on that year
        var monthDifference = curDate.getMonth() - selDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && curDate.getDate() < selDate.getDate())) {
            age--;
        }

        //Invalid state-
        if (age < 18) {
            //If age <18 disable the submit button
            submitBtn.disabled = true;
            //using tailwind classes to make the button gray and remove background color transitions
            submitBtn.classList.remove('bg-cyan-600');
            submitBtn.classList.add('bg-gray-400');
            submitBtn.classList.remove('transition');
            submitBtn.classList.remove('hover:bg-red-500');
            //validation to false
            validation["dob"] = false;

            //red border, X mark and error message
            change_input_outlines(document.getElementById('dob'), "invalid");
            set_icons(document.getElementById('dob_input_div'), "invalid");
            set_error_msg(dob_error_p, dob_error_msg);
        }
        else //valid input
        {
            //Enable the submit button
            submitBtn.disabled = false;
            //remove gray color and add background color transition
            submitBtn.classList.remove('bg-gray-400');
            submitBtn.classList.add('bg-cyan-600');
            submitBtn.classList.add('transition');
            submitBtn.classList.add('hover:bg-red-500');
            //validation tot true
            validation["dob"] = true;

            //green border, tick mark and remove error message
            change_input_outlines(document.getElementById('dob'), "valid");
            set_icons(document.getElementById('dob_input_div'), "valid");
            set_error_msg(dob_error_p, "");
        }
    },
    //following a Jquery DatePicker properties
    autoclose: true,    //close the datepicker after selecting the date
    maxDate: new Date(),    //max selectable date to current date, so you cannot select a date in future
    changeMonth: true,      //option to switch months
    changeYear: true,       //option to select years
    showOtherMonths: true,
    selectOtherMonths: true, //select months on dropdown
});


//Event Listener for gender input field
let gender_inp = document.getElementsByName('gender');
gender_inp.forEach((item) => {
    //if any option is selected , it is validated
    //each option has a listener
    item.addEventListener('change', () => {
        validation["gender"] = true;

        set_icons(document.getElementById('gender_option_div'), "valid");
        set_error_msg(gender_error_p, "");
    });
});

//Event listener for genre input field
let genre_inp = document.getElementsByName('genre');
genre_inp.forEach((items) => {
    //each item has a listener
    items.addEventListener('change', () => {
        //query selector to get the number of checked checkboxes
        let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        //if > three checkboxes are selected, it is validated
        if (count >= 3) //valid state-
        {
            //validation to true
            validation['genre'] = true;
            //tick mark and remove error message
            set_icons(document.getElementById('genre_input_div'), "valid");
            set_error_msg(genre_error_p, "");
        }
        else {
            //validation to false
            validation['genre'] = false;
            //X mark and set error message
            set_icons(document.getElementById('genre_input_div'), "invalid");
            set_error_msg(genre_error_p, genre_error_msg);
        }
    });
});

//Event listener for country selection field
let country_inp = document.getElementById('country');
country_inp.addEventListener('change', () => {
    //if any option is selected, it is validated
    //checks the HTML value attribute
    //initial default option has no value, other options have a value
    if (country_inp.value != "") //valid state-
    {
        //validation to true
        validation['country'] = true;
        //green border, tick mark and remove error message
        change_input_outlines(country_inp, "valid");
        set_icons(document.getElementById('country_input_div'), "valid");
        set_error_msg(country_error_p, "");
    }
    else //invalid state-
    {
        //validation to false
        validation['country'] = false;
        //red border, X mark and set error message
        change_input_outlines(country_inp, "invalid");
        set_icons(document.getElementById('country_input_div'), "invalid");
        set_error_msg(country_error_p, country_error_msg);
    }

});

//Event listener to for profile picture
let pic_inp = document.getElementById('profile_pic');
pic_inp.addEventListener("input", () => {
    var fileName = pic_inp.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") //valid input
    {
        validation['profile_pic'] = true;
        set_error_msg(pic_error_p, "");
        set_icons(document.getElementById('profile_pic_input_div'), "valid");
        change_input_outlines(pic_inp, "valid");
    }
    else //image file was not selected
    {
        validation['profile_pic'] = false;
        set_error_msg(pic_error_p, pic_error_msg);
        set_icons(document.getElementById('profile_pic_input_div'), "invalid");
        change_input_outlines(pic_inp, "invalid");
        pic_inp.value = "";
    }
});

//Event Listener for user bio
let bio_inp = document.getElementById('bio');
bio_inp.addEventListener("input", () => {
    var text = bio_inp.value;

    // Split the text into words filtering out empty strings
    var words = text.trim().split(/\s+/).filter(word => word.length > 0);

    // Check if there are at least 4 words
    if (words.length >= 4) //valid input
    {
        validation['bio'] = true;
        set_error_msg(bio_error_p, "");
        set_icons(document.getElementById('bio_input_div'), "valid");
        change_input_outlines(bio_inp, "valid");
    }
    else //invalid
    {
        validation['bio'] = false;
        set_error_msg(bio_error_p, bio_error_msg);
        set_icons(document.getElementById('bio_input_div'), "invalid");
        change_input_outlines(bio_inp, "invalid");
    }
});

//Function that runs when submit button is clicked
function submit_form() {
    //checking the validation dictionary if all inputs are validated.
    if (validation['username'] && validation['email'] && validation['password'] && validation['conf_password'] && validation['dob'] && validation['gender'] && validation['genre'] && validation['country']) {
        //All inputs are validated
        alert("Registration Successful!");
        //submits the form
        document.getElementById('register_form').submit();
    }
    else //there are invalid inputs-
    {
        //checking if each input field is validated and sets the red border, X mark and error message if needed
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
        if (!validation['profile_pic']) {
            set_error_msg(pic_error_p, pic_error_msg);
            set_icons(document.getElementById('profile_pic_input_div'), "invalid");
            change_input_outlines(pic_inp, "invalid");
        }
        if (!validation['bio']) {
            set_error_msg(bio_error_p, bio_error_msg);
            set_icons(document.getElementById('bio_input_div'), "invalid");
            change_input_outlines(bio_inp, "invalid");
        }
    }
}

//adding a event listener and function to the submit button
submitBtn.addEventListener('click', submit_form);

//used to clear the form on page refresh
window.onbeforeunload = () => {
    document.getElementById('register_form').reset();
}

//back button to go home
document.getElementById('back_button').addEventListener('click', () => {
    window.location.replace("Home.html");
});