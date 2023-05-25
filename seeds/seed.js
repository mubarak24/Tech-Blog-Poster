const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const blogs = await Promise.all(
        blogData.map((blog) => {
            const randomUserId = users[Math.floor(Math.random() * users.length)].id;
            return Blog.create({
                ...blog,
                userId: randomUserId,
            });
        })
    );

    process.exit(0);
};

seedDatabase();
