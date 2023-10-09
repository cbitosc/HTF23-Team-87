function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Replace the following condition with your actual login logic
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful! Redirecting to the next page.');
        window.location.href = 'next_page.html';
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}
