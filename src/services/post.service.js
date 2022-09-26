const { BlogPost, Category, PostCategory, User, sequelize } = require('../models');
const errorGenerate = require('../utils/errorGenerate');

const createPost = async ({ title, content, categoryIds }, idUser) => {
    const categoryExists = await (await Promise.all(categoryIds.map((id) => (
       Category.findOne({ where: id })
    )))).every((item) => item !== null);
    
    if (!categoryExists) throw errorGenerate('"categoryIds" not found', 400);
    
    const result = await sequelize.transaction(async (t) => {
        const date = new Date();
        const post = await BlogPost.create(
            { title, content, userId: idUser, categoryIds, published: date, updated: date },
            { transaction: t },
        );

        const idPost = post.dataValues.id;
        await Promise.all(categoryIds.map(async (id) => PostCategory
        .create({ postId: idPost, categoryId: id }, { transaction: t })));

        return post;
    });

    return result;
};

const getBlogPosts = async () => BlogPost.findAll({
    include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    { 
        model: Category, as: 'categories', through: { attributes: [] },
    }],
});

module.exports = {
    createPost,
    getBlogPosts,
 };