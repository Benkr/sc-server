const pug = require('pug');
const path = require('path');

const render404 = (slug) => {
  try {
    const url = `http://localhost:3400/${slug}`;
    return pug.renderFile(path.resolve(__dirname, './404.pug'), { url });
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = {
  render404,
};
