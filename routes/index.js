const { Router } = require('express');
const { handleGetSlug, handlePostSlug } = require('./ctrl');

const slugRouter = Router();

slugRouter.get('/:slugparam', handleGetSlug);
slugRouter.post('/api/slug', handlePostSlug);

module.exports = slugRouter;
