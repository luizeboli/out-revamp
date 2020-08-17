// We need this config because 'glightbox' uses 'window' object
// and it's not available during SSR.
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /glightbox/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
