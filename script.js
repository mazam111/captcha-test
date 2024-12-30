<script>
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("captcha-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            // Capture CAPTCHA response
            const captchaResponse = document.querySelector('.cf-turnstile').getAttribute('data-response');

            if (captchaResponse) {
                console.log("CAPTCHA Response Token:", captchaResponse);
                alert("CAPTCHA successfully completed!");
            } else {
                alert("Please complete the CAPTCHA!");
            }
        });
    });
</script>
