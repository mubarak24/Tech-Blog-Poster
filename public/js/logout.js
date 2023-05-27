const logout = async () => {
    // Send a GET request to the logout API endpoint
    const response = await fetch('/api/users/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successful, redirect the browser to the login page
      document.location.replace('/login');
    } else {
      alert('Logout failed. Please try again.');
    }
  };
  
  document.querySelector('.logout-link').addEventListener('click', logout);
  