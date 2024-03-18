const button = document.querySelector("button");
button.addEventListener("click", ()=> {
    const username = document.getElementById("username").value || "";
    const password = document.getElementById("password").value || "";

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});


// Auto populating fields
window.onload = () => {
    if (localStorage.getItem("username") !== null) {
        document.getElementById("username").value = localStorage.getItem("username");
        document.getElementById("password").value = localStorage.getItem("password");
    }
}