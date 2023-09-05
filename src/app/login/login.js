//User login data class
class UserLoginData {
    constructor(username, password, selectedServer, notes) {
        this.username = username;
        this.password = password;
        this.selectedServer = selectedServer;
        this.notes = notes;
    }
}

// Password visibility toggle
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");

// Get the form and login button elements by their IDs
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");

// Get the server select element by its ID
const serverSelect = document.getElementById("serverSelect");

// Define an array of server options
const serverOptions = ["Development", "Test", "Demo", "DataVoice", "BankPoint", "Matrix"];

passwordToggle.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "🔑";
    }
});

// Function to populate the server select element
function populateServerSelect() {
    for (let i = 0; i < serverOptions.length; i++) {
        const option = document.createElement("option");
        option.value = serverOptions[i];
        option.textContent = serverOptions[i];
        serverSelect.appendChild(option);
    }
}

// Function to simulate sending login data to the backend (mock API request)
function sendLoginDataToBackend(userLoginData) {
    // Simulate a successful login (replace with your actual logic)
    const newPageUrl = `../home/homepage.html?username=${encodeURIComponent(userLoginData.username)}&server=${encodeURIComponent(userLoginData.selectedServer)}&notes=${encodeURIComponent(userLoginData.notes)}`;
    window.location.href = newPageUrl;
}

/* Function to simulate sending login data to the backend if we had one (mock API request) */
function sendLoginDataToBackendIfProvided(userLoginData) {
    const apiUrl = "https://example.com/login";

    // Simulate sending a POST request to the backend
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginData),
    })
    .then((response) => {
        if (response.status === 200) {
            // Successful login, proceed to redirect to the homepage
            const newPageUrl = `../home/homepage.html?username=${encodeURIComponent(userLoginData.username)}&server=${encodeURIComponent(userLoginData.selectedServer)}&notes=${encodeURIComponent(userLoginData.notes)}`;
            window.location.href = newPageUrl;
        } else {
            // Handle login error.
            console.error("Login failed.");
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
}

// Add a submit event listener to the form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form elements
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const selectedServer = serverSelect.value;
    const notes = document.getElementById("notes").value;

    // Create a UserLoginData instance
    const userLoginData = new UserLoginData(username, password, selectedServer, notes);

    // Simulate sending login data to the backend
    sendLoginDataToBackend(userLoginData);

    /* It would called be here as if we were to send a request to the backend */
    // sendLoginDataToBackendIfProvided(userLoginData);
});

populateServerSelect();