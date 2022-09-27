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

const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await postService.getPostById(id);
        return res.status(200).json(post);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const postUpdate = await postService.updatePost(id, userId, req.body);
        return res.status(200).json(postUpdate);
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const isDelete = await postService.deletePost(id, userId);
        return res.status(204).json(isDelete);
    } catch (err) {
        next(err);
    }
};

const getSearchPost = async (req, res, next) => {
    try {
        const { q } = req.query;
        const search = await postService.getSearchPost(q);
        return res.status(200).json(search);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createPost,
    getBlogPosts,
    getPostById,
    updatePost,
    deletePost,
    getSearchPost,
};