document.addEventListener("DOMContentLoaded", function () {
    // Function to parse query parameters from the URL
    function getQueryParameters() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const parameterPairs = queryString.split("&");
        
        for (const pair of parameterPairs) {
            const [key, value] = pair.split("=");
            params[key] = decodeURIComponent(value);
        }
        
        return params;
    }

    // Get query parameters from the URL
    const queryParams = getQueryParameters();

    // Get the HTML elements to display user info
    const usernameElement = document.getElementById("username");
    const serverElement = document.getElementById("server");
    const notesElement = document.getElementById("notes");

    // Display user info
    if (queryParams.username) {
        usernameElement.textContent = queryParams.username;
    }

    if (queryParams.server) {
        serverElement.textContent = queryParams.server;
    }

    if (queryParams.notes) {
        notesElement.textContent = queryParams.notes;
    }
});
