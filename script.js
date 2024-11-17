document.addEventListener("DOMContentLoaded", function() {
    const joinNowButton = document.getElementById("joinNowButton");
    const signupSection = document.getElementById("signupSection");
    
    // Check if button exists
    if (!joinNowButton) {
        console.error('Join Now button not found');
        return;
    }

    // Show sign-up form when "Join Now" button is clicked
    joinNowButton.addEventListener("click", function() {
        console.log('Join Now button clicked');  // Check if event triggers
        signupSection.style.display = "block";  // Show the sign-up form
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const joinNowButton = document.getElementById("joinNowButton");
    const signupSection = document.getElementById("signupSection");
    const heroSection = document.querySelector(".hero");
    const howItWorksSection = document.querySelector(".how-it-works");
    const testimonialsSection = document.querySelector(".testimonials");
    
    // When "Join Now" is clicked, hide the hero section and show the sign-up form
    joinNowButton.addEventListener("click", function() {
        // Hide other sections
        heroSection.classList.add("hide");
        howItWorksSection.classList.add("hide");
        testimonialsSection.classList.add("hide");

        // Show sign-up section
        signupSection.classList.add("show");
    });

    // Handle form submission
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the page from refreshing on form submit

        // Collect form data
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validate form data
        let errors = [];

        // Username validation (check for empty)
        if (!username) {
            errors.push("Username is required.");
        }

        // Email validation (check for valid email format)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Password validation (check length)
        if (!password || password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // Show errors if validation fails
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return; // Stop form submission
        }

        // If everything is valid, simulate a successful form submission
        alert("Thank you for signing up! We will send a confirmation email to " + email + ".");

        // Reset the form
        signupForm.reset();

        // Optionally, hide the sign-up section and show a success message or redirect
        signupSection.classList.remove("show");
        heroSection.classList.remove("hide");
        howItWorksSection.classList.remove("hide");
        testimonialsSection.classList.remove("hide");
    });
});
