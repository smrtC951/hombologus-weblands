const signincheck = false;

document.addEventListener('DOMContentLoaded', function() {
    const topbarHTML = `
        <div class="topbar">
            <img src="Untitled.jpg" style="height: 25px; width: 100px; margin-right: 10px;">
            <a href="index.html" class="button" style="margin-right: 10px;">home</a>
            <a href="files.html" class="button" style="margin-right: 10px;">files</a>
            <a href="sign.html" class="button">your account</a>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', topbarHTML);
});

function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("please fill in all fields");
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    signincheck = true;
    window.location.href = "index.html";
}

function signin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        signincheck = true;
        window.location.href = "index.html";
    } else if (username === localStorage.getItem("username") && password !== localStorage.getItem("password")) {
        alert("incorrect password");
    } else {
        alert("user not found");
    }
}

