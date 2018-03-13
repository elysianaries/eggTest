'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jsonp = app.jsonp();

  router.get('/', controller.home.index);
  router.resources('topics', '/api/v2/topics', jsonp, controller.topics);
};
