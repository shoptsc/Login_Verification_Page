const input = document.querySelectorAll('input');
const login = document.querySelector("button");

for (var i of input) {
    i.addEventListener('input', checkSubmission);
}
login.addEventListener('click', checkSubmission);

function checkSubmission(e) {
    e.preventDefault();
    const username = document.getElementById('user');
    const password = document.getElementById("password");
    username_value = username.value;
    password_value = password.value;

    if (username.value === '') {
        setErrorFor(username, 'please enter a valid name');
    } else {
        setSuccessFor(username, 'name valid');
    }


    if (password_value === "") {
        setErrorFor(password, 'please enter a valid password');
    } else {
        setSuccessFor(password, 'password valid')
    }
}

function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = msg;
    small.className = 'error';
}

function setSuccessFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = msg;
    small.className = 'success';
}