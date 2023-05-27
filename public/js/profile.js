const deletePostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      // Send a DELETE request to the API endpoint to delete the post
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, reload the page to reflect the changes
        document.location.reload();
      } else {
        alert('Failed to delete post.');
      }
    }
  };
  
  document.querySelectorAll('.delete-post').forEach((element) => {
    element.addEventListener('click', deletePostHandler);
  });
  
  