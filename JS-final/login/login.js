function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    const emailAlert = document.querySelector('.login-section-info-form-input-email-alert');
    const passwordAlert = document.querySelector('.login-section-info-form-input-password-alert');

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

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
    }

    if (email.value === storedEmail && password.value === storedPassword) {
        window.location.href = "/JS-final/homePage/home.html"; 
    } else {
        alert("Invalid email or password.");
    }
}

document.querySelector(".login-section-info-form").addEventListener("submit", handleLogin);

document.getElementById('signup-link').addEventListener('click', () =>{
    window.location.href = "/JS-final/signup/index.html";
})