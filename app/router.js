'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.home);
  router.get('/add', controller.user.index);
  router.post('/del', controller.user.del);
};
