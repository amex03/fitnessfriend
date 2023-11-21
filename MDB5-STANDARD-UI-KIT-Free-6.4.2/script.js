//Login starts
document.addEventListener('DOMContentLoaded', function() {
    // Get the login form
    var loginForm = document.getElementById('loginForm');

    // Add an event listener for the submit event
    loginForm.addEventListener('submit', function(event) {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Get the email and password
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        // Validate the email and password
        if (email === '' || password === '') {
            alert('Email and password are required');
        } else {
            // Submit the form
        
            console.log('Email:', email, 'Password:', password);
        }
    });

    // Get the signup form
    var signupForm = document.getElementById('signupForm');

    // Add an event listener for the submit event
    signupForm.addEventListener('submit', function(event) {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Get the email and password
        var email = document.getElementById('signupEmail').value;
        var password = document.getElementById('signupPassword').value;

        // Validate the email and password
        if (email === '' || password === '') {
            alert('Email and password are required');
        } else {
            // Submit the form
            console.log('Email:', email, 'Password:', password);
        }
    });
});