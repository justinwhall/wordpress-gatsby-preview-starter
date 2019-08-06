exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/preview/)) {
    page.matchPath = '/preview/:id/:postType/:nonce';

    createPage(page);
  }
};