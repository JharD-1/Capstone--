//VALIDATION
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const formField= element.parentElement;
    const errorDisplay = formField.querySelector('.error');

    errorDisplay.innerText = message;
    formField.classList.add('error');
    formField.classList.remove('success')
}

const setSuccess = element => {
    const formField = element.parentElement;
    const errorDisplay = formField.querySelector('.error');

    errorDisplay.innerText = '';
    formField.classList.add('success');
    formField.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else {
        setSuccess(phone);
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

 //EYE TOGGLER
 function toggle() {
     if(password.getAttribute('type')==='password'){
         password.setAttribute('type', 'text');
         document.getElementById("eye").style.color='black';
     }

     else {
        password.setAttribute('type', 'password');
        document.getElementById("eye").style.color='white';
     }

     if(password2.getAttribute('type')==='password'){
        password2.setAttribute('type', 'text');
        document.getElementById("eyed").style.color='black';
     }

    else {
        password2.setAttribute('type', 'password');
        document.getElementById("eyed").style.color='white';
     }
 }
