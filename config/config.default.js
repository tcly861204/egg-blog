'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/blog',
        options: {},
      },
    },
    logger: {
      dir: path.join(appInfo.baseDir, 'logs'),
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527491094373_7811';

  // add your config here
  config.middleware = [];

  return config;
};
