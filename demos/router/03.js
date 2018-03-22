/**
 * 静态服务
 */
const path = require('path');
const staticServer = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// app.use(staticServer(path.join(__dirname, '/public')));
app.use(staticServer(path.resolve(__dirname, 'public')));

app.listen(3000, () => {
  console.log('running...');
});