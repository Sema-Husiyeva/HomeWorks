function handleSignup(e) {
    e.preventDefault();
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const repeatPassword = document.getElementById("repeat-password");
    const emailAlert = document.querySelector('.sign-up-section-info-form-input-email-alert');
    const passwordAlert = document.querySelector('.sign-up-section-info-form-input-password-alert');


    emailAlert.textContent = "";
    passwordAlert.textContent = "";

    if (email.value == ''){
        emailAlert.textContent="Can't be empty!";
        return;
    } else if (!email.value.includes('@gmail.com')){
        emailAlert.textContent="Invalid email!";
        return;
    } 

    if (password.value == ''){
        passwordAlert.textContent="Can't be empty!";
        return;
    } else if (password.value.length < 8) {
        passwordAlert.textContent="Must have at least 8 elements!";
        return;
    } else if (password.value !== repeatPassword.value) {
        passwordAlert.textContent="Passwords don't match!";
        return;
    }
    

    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userPassword", password.value);
    alert("Account created successfully!");
    email.value = "";
    password.value = "";
    repeatPassword.value = "";
}

document.querySelector(".sign-up-section-info-form").addEventListener("submit", handleSignup);

document.getElementById('login-link').addEventListener('click', () =>{
    window.location.href = "/JS-final/login/login.html";
})