let messageButton = document.getElementById("loginButton");
let formArea = document.getElementById("container");

messageButton.addEventListener('click', () => {
    // 1 get the values
    let inputLoginEmail = document.getElementById('loginEmail').value;
    let inputLoginPassword = document.getElementById("loginPassword").value;
    let messageErrorElement = document.getElementById('message-error');

    if (inputLoginEmail === "" || inputLoginPassword === "") {
        return messageErrorElement.innerHTML = "All fields needs to be filled";
    } else {
        messageErrorElement.innerHTML = "";
    }

})