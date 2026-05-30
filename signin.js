function signup() {
    const username =
        document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location.href = "index.html";
}

function signin() {
    const username =
        document.getElementById("username").value;

    if (
        username ===
        localStorage.getItem("username")
    ) {
        window.location.href = "index.html";
    } else {
        alert("user not found");
    }
}