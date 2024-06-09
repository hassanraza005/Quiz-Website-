

const form = document.querySelector('form');
const userName = document.querySelector('#register-user');
const userEmail = document.querySelector('#register-email');
const userPassword = document.querySelector('#register-password');
const againPassword = document.querySelector('#register-again-password');

const nameRegex = /^[A-Z][a-zA-Z0-9]* [a-z][a-zA-Z0-9]*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

function validateName(name){
    return nameRegex.test(name);
}

function validateEmail(email){
    return emailRegex.test(email);
}

function validatePassword(password){
    return passwordRegex.test(password);
}

function validateAgainPassword(password,againPassword){
    return password === againPassword
}


function addUserData(){
    let usersData = JSON.parse(localStorage.getItem('users')) || []

    usersData.push({
        userName: userName.value,
        email: userEmail.value,
        password:  userPassword.value,
        againPassword:  againPassword.value
    })
    localStorage.setItem('users',JSON.stringify(usersData))
}


let errors = []

function validateForm(){
    errors = [];

    if(!validateName(userName.value)){
        errors.push('Invalid username. It should start with an uppercase letter and be 6 to 15 characters long.');
    }

    if(!validateEmail(userEmail.value)){
        errors.push('Invalid Email')
    }

    if(!validatePassword(userPassword.value)){
        errors.push('Invalid Password. It should be at least 8 characters long and contain at least one special character.')
    }

    if(!validateAgainPassword(userPassword.value,againPassword.value)){
        errors.push('Passwords do not match')
    }

    if(errors.length> 0){
        alert(errors.join('\n'));
        return false;
    }
    return true;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(validateForm()){
        addUserData();
        form.reset()
        alert('Registration Successful. Redirecting to login page.');
        window.location ='index.html'
    }
});
