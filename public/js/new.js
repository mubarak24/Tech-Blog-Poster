const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const body = document.querySelector('textarea[name="body"]').value.trim();

  if (title && body) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create a new post. Please try again.');
    }
  }
};

document.querySelector('.post-form').addEventListener('submit', newPostFormHandler);
