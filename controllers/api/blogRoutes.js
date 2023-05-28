const express = require('express');
const router = express.Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const { title, body } = req.body;

    const newBlog = await Blog.create({
      title,
      body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new blog post.' });
  }
});

// Update a blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    const updatedBlog = await Blog.update(
      { title, body },
      {
        where: {
          id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedBlog[0] === 0) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Blog post updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the blog post.' });
  }
});

module.exports = router;
