let loginButton = document.getElementById("loginButton");
const EMAIL = "mail@example.com";
const PASSWORD = "password";

loginButton.addEventListener('click', () => {
    // 1 get the values

    let inputLoginEmail = document.getElementById('loginEmail').value;
    let inputLoginPassword = document.getElementById("loginPassword").value;
    let loginErrorElement = document.getElementById('login-error');
    let messageErrorElement = document.getElementById('message-error');

    if (inputLoginEmail === "" || inputLoginPassword === "") {
        return messageErrorElement.innerHTML = "All fields needs to be filled";
    } else {
        messageErrorElement.innerHTML = "";
        if (inputLoginEmail != EMAIL || inputLoginPassword != PASSWORD) {
            return loginErrorElement.innerHTML = "Wrong email or password";
        } else {
            loginErrorElement.innerHTML = "";
        }
    }

})