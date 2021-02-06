const { getUrl, createSlug } = require('../models/crud');
const { render404 } = require('../view');

const handleGetSlug = async (req, res) => {
  try {
    const slug = req.params.slugparam.toLowerCase();
    const q = req.query; // Just for your reference
    console.log(q); // Just for your reference
    const slugFromDb = await getUrl({ slug });
    if (!slugFromDb) return res.status(404).send(render404(slug));
    if (slugFromDb.error) return res.status(500).json({ error: 'Sorry, not today' });
    return res.redirect(slugFromDb.url);
  } catch (err) {
    return res.status(500).json({ error: 'Sorry, sorry, sorry' });
  }
};

const handlePostSlug = async (req, res) => {
  try {
    const { slug, url } = req.body;
    if (!slug || !url) return res.status(400).json({ error: 'Bad request' });
    const slugFromDb = await createSlug({ slug, url });
    if (slugFromDb.error) return res.status(500).json({ error: 'Sorry, not today' });
    return res.status(200).json(slugFromDb);
  } catch (err) {
    return res.status(500).json({ error: 'Sorry, not today' });
  }
};

module.exports = {
  handleGetSlug,
  handlePostSlug,
};
