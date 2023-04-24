const server = require('../server');
const Router = require('koa-router');

const router = new Router();

router.post('/files', async (ctx) => {
  const { file } = ctx.request.files;
  const { body } = ctx.request;
  server.db.saveFile(file);
  server.db.addFileMessage(file, body);
  ctx.response.body = {
    success: true,
  }
});

module.exports = router;