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

const getBlogPosts = async (req, res, next) => {
    try {
        const posts = await postService.getBlogPosts();
        return res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createPost,
    getBlogPosts,
};