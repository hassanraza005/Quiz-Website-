
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const formLogin = document.querySelector('form');


function getUsers(){
    return JSON.parse(localStorage.getItem('users')) || [];
}

function validateLogin(email,password){
    const users = getUsers();
    return users.find(user =>user.email === email && user.password === password )
}

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    const email = emailLogin.value;
    const password = passwordLogin.value;

       const users = getUsers()
    if (users.length === 0) {
        alert('Please register before attempting to login.');
        return
    }

    const user = validateLogin(email,password);

    if(user ){
        alert('Login Successful');
        window.location = 'quiz.html'
    }else{
        alert('Email and Password do not match');
    }
    formLogin.reset();
});
