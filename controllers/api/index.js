const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
