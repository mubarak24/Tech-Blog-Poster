const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Sign up failed. Please try again.');
        }
    } else {
        alert('Please provide a name, email, and password.');
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
