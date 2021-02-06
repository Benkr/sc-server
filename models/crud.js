const Slug = require('./slug.model');

const createSlug = async ({ url, slug }) => {
  try {
    const _slug = await Slug.create({ url, slug });
    return _slug;
  } catch (err) {
    return { error: err };
  }
};

const getSlugs = async () => {
  try {
    const slugs = await Slug.findAll();
    return slugs;
  } catch (err) {
    return { error: err };
  }
};

const getUrl = async ({ slug }) => {
  try {
    const _slug = await Slug.findOne({ where: { slug } });
    return _slug;
  } catch (err) {
    return { error: err };
  }
};

module.exports = {
  createSlug,
  getSlugs,
  getUrl,
};
