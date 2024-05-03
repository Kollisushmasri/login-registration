document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(registrationForm);
        const userData = {};

        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Send registration data to backend
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle response from the server, like redirecting to a confirmation page
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
    });
});
