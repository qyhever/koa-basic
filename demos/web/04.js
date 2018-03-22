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
  const files = ctx.request.body.files;

  const filePaths = [];

  for (let k in files) {
    const file = files[k]; // file是数组
    const filePath = path.resolve(__dirname, 'uploads');
    for (let i = 0; i < file.length; i++) {
      const filePath = path.resolve(__dirname, 'uploads', file[i].name);
      const reader = fs.createReadStream(file[i].path); // file.path：文件上传的临时位置
      const writer = fs.createWriteStream(filePath);

      reader.pipe(writer);
      filePaths.push(filePath);
    }
  }
  ctx.body = filePaths;
};

app.use(route.post('/upload', upload));

app.listen(3000, () => {
  console.log('running...');
});