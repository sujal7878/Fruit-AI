// login.js

// Toggle password visibility
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelectorAll('.toggle-password');
    togglePassword.forEach(span => {
        span.addEventListener('click', () => {
            const passwordInput = span.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            span.textContent = type === 'password' ? '👁' : '🙈';
        });
    });
});

// Handle tab switching
document.getElementById('login-tab').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
});

// Handle form submissions (basic example, needs proper validation and handling)
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    console.log('Login Email:', email);
    console.log('Login Password:', password);
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    console.log('Register Name:', name);
    console.log('Register Email:', email);
    console.log('Register Password:', password);
});
