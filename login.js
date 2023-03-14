let loginButton = document.getElementById("loginButton");
const EMAIL = "mail@example.com";
const PASSWORD = "password";

loginButton.addEventListener('click', () => {
    // 1 get the values

    let inputLoginEmail = document.getElementById('loginEmail').value;
    let inputLoginPassword = document.getElementById("loginPassword").value;
    let messageErrorElement = document.getElementById('login-error');
    console.log(inputLoginEmail);
    console.log(EMAIL);

    if (inputLoginEmail != EMAIL || inputLoginPassword != PASSWORD) {
        return messageErrorElement.innerHTML = "Wrong email or password";
    } else {
        messageErrorElement.innerHTML = "";
    }

})