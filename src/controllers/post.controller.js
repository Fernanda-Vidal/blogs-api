const postService = require('../services/post.service');

const createPost = async (req, res, next) => {
    try {
        const { id } = req.user;
        const post = await postService.createPost(req.body, id);
        return res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createPost,
};