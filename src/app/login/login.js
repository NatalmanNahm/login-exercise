document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const server = document.getElementById("serverSelect").value;
    const notes = document.getElementById("notes").value;


    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Server: ${server}`);
    console.log(`Notes: ${notes}`);
});

// Password visibility toggle
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");

passwordToggle.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "🔑";
    }
});

// Get the server select element by its ID
const serverSelect = document.getElementById("serverSelect");

// Define an array of server options
const serverOptions = ["Development", "Test", "Demo", "Customer1", "Customer2"];


// Function to populate the server select element
function populateServerSelect() {
    for (let i = 0; i < serverOptions.length; i++) {
        const option = document.createElement("option");
        option.value = serverOptions[i];
        option.textContent = serverOptions[i];
        serverSelect.appendChild(option);
    }
}

populateServerSelect();