// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.getElementById("captcha-form");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Get the CAPTCHA response token from Turnstile
        const turnstileResponse = document.querySelector('.cf-turnstile').getAttribute('data-response');

        if (turnstileResponse) {
            // Log the response token (for testing purposes)
            console.log("CAPTCHA Response Token:", turnstileResponse);

            // Display a success message
            alert("CAPTCHA completed successfully!");

            // Optionally, send the token to your server for verification
            // (You'll need server-side code to handle this)
        } else {
            // Display an error message
            alert("Please complete the CAPTCHA before submitting!");
        }
    });
});

