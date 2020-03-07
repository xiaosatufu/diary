'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/user', controller.user.index)
  router.get('/user/:id', controller.user.getid)
  // router.post('/add',controller.user.add)
  router.post('/getUser', controller.user.index)
  router.get('/list', controller.home.list)
  router.post('/add', controller.home.add)
  router.get('/detail/:id', controller.home.getDiaryById)
  router.post('/delete', controller.home.delete)
  router.post('/update', controller.home.update)
};
