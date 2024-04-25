document.getElementById("login").addEventListener("click", function() {
    console.log("Login clicked")
})

document.getElementById("password").addEventListener("click", function() {
    console.log("Password clicked")
})

document.getElementById("button").addEventListener("click", function() {
    console.log("Button clicked")
})
document.addEventListener('DOMContentLoaded', function() {
    const loginList = [];
    const passwordList = [];
    const input1 = document.getElementById('login'); 
    const input2 = document.getElementById('password');
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        const login = input1.value;
        if (login) {
            loginList.push(login);
            console.log('LoginList:', loginList);
            input1.value = '';
        }
        const password = input2.value;
        if (password) {
            passwordList.push(password);
            console.log('PasswordList:', passwordList);
            input2.value = '';
        }
    })
});
