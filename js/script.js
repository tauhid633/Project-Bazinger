var ynames = document.getElementById('yname');
var ynames_err = document.getElementById('yname_err');

var emails = document.getElementById('email');
var emails_err = document.getElementById('email_err');

var subjects = document.getElementById('subject');
var subjects_err = document.getElementById('subject_err');

var email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function form_valid() {
    if (ynames.value == '') {
        ynames_err.innerHTML = 'Please Enter your Full Name';
        ynames_err.style = 'background: #d14545; height: 34px; width: 275px; border-radius: 5px; color: #fff; margin: 0 auto; margin-bottom: 14px; text-align: center; line-height: 34px; font-family: sans-serif; font-weight: 400; font-size: 14px;';
        ynames.style = 'border: 1px solid red;';
        ynames.focus();


        return false;


    } else if (emails.value == '') {
        emails_err.innerHTML = 'Please Enter a Valid Email';
        emails_err.style = 'background: #d14545; height: 34px; width: 275px; border-radius: 5px; color: #fff; margin: 0 auto; margin-bottom: 14px; text-align: center; line-height: 34px; font-family: sans-serif; font-weight: 400; font-size: 14px;';
        emails.style = 'border: 1px solid red;';
        emails.focus();


        return false;


    } else if (!email_rgx.test(emails.value)) {
        emails_err.innerHTML = 'Your email is not Valid';
        emails_err.style = 'background: #d14545; height: 34px; width: 275px; border-radius: 5px; color: #fff; margin: 0 auto; margin-bottom: 14px; text-align: center; line-height: 34px; font-family: sans-serif; font-weight: 400; font-size: 14px;';
        emails.style = 'border: 1px solid red;';
        emails.focus();

        return false;


    } else if (subjects.value == '') {
        subjects_err.innerHTML = 'Please Enter a subject here';
        subjects_err.style = 'background: #d14545; height: 34px; width: 275px; border-radius: 5px; color: #fff; margin: 0 auto; margin-bottom: 14px; text-align: center; line-height: 34px; font-family: sans-serif; font-weight: 400; font-size: 14px;';
        subjects.style = 'border: 1px solid red;';
        subjects.focus();

        return false;

    }

}



function remove() {
    if (ynames.value != '') {
        ynames_err.innerHTML = '';
        ynames_err.style = 'background: inherit;';
        ynames.style = 'border: 1px solid inherit;';


    }

    if (email_rgx.test(emails.value)) {
        emails_err.innerHTML = '';
        emails_err.style = 'background: inherit;';
        emails.style = 'border: 1px solid inherit;';
    }

    if (subjects.value != '') {
        subjects_err.innerHTML = '';
        subjects_err.style = 'background: inherit;';
        subjects.style = 'border: 1px solid inherit;';
    }

}



ynames.addEventListener('blur', remove);

emails.addEventListener('blur', remove);

subjects.addEventListener('blur', remove);
