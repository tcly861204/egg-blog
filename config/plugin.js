'use strict';
// had enabled by egg
// exports.static = true;
module.exports = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
