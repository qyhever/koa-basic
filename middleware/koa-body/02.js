/* 
  koa-body中间件 处理文件上传
*/
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const route = require('koa-route');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();

app.use(staticServer(path.resolve(__dirname, 'public')));

// multipart: true 接收formData格式数据
app.use(koaBody({ multipart: true }));

const upload = ctx => {
  const body = ctx.request.body.files;
  // console.log(ctx.request.body.fields);
  // console.log(body); // { upfile: [文件列表]}
  const filePaths = [];
  for (let k in body) {
    let files = body[k];
    if (Array.isArray(files)) { // 多个文件，files是数组
      files.forEach(file => {
        const ext = path.extname(file.name);
        const basename = path.basename(file.path);
  
        const fileDestPath = path.resolve(__dirname, 'uploads', `${basename}${ext}`);
  
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(fileDestPath);
        reader.pipe(writer);
  
        filePaths.push(fileDestPath);
      });
      ctx.body = filePaths;
    } else { // 一个文件，files是对象
      const file = files;
      const ext = path.extname(file.name);
      const basename = path.basename(file.path);

      const fileDestPath = path.resolve(__dirname, 'uploads', `${basename}${ext}`);

      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(fileDestPath);
      reader.pipe(writer);
      ctx.body = fileDestPath;
    }
  }
};

app.use(route.post('/upload', upload));

app.listen(4000, () => {
  console.log('running...');
});