document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you can perform further actions like sending the data to the server
        // For demonstration purposes, let's just log the data
        console.log('Email:', email);
        console.log('Password:', password);
    });
});
