/**
 * CORS middleware
 *
 * @param {Object} [options] 
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is '*'
 *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'
 *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean} credentials `Access-Control-Allow-Credentials`
 *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown
 * @return {Function} 
 * @api public
 */
const Koa = require('koa')
const cors = require('kcors')
const app = new Koa()

app.use(cors())

app.use(ctx => {
	ctx.body = 'kcors'
})

app.listen(3002, () => console.log('Koa app listening on 3002'))