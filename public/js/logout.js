const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Logout failed. Please try again.');
  }
};

document.querySelector('.logout-link').addEventListener('click', logout);
