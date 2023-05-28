const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (name && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Sign up failed. Please try again.');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
