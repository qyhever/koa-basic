/**
 * 文件上传：koa-body中间件
 */
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const util = require('util');
const route = require('koa-route');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();

app.use(staticServer(path.resolve(__dirname, 'public')));

// 使用koa-body中间件处理文件上传
app.use(koaBody({ multipart: true }));

const upload = async ctx => {
  const body = ctx.request.body.files;
  console.log(body); // { upfile: [文件列表]}
  console.log(ctx.request.body);
  const filePaths = [];

  for (let k in body) {
    const files = body[k]; // file是数组
    files.forEach(file => {
      const ext = path.extname(file.name);
      const basename = path.basename(file.path);

      const fileDestPath = path.resolve(__dirname, 'uploads', `${basename}${ext}`);

      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(fileDestPath);
      reader.pipe(writer);

      filePaths.push(fileDestPath);
    });
  }
  ctx.body = filePaths;
};

app.use(route.post('/upload', upload));

app.listen(4000, () => {
  console.log('running...');
});