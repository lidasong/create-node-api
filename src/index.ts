import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import router from './routers'
import debug from 'debug'
const debuger = debug('koa:app')

const app = new Koa()

app.use(logger())
    .use(bodyParser())
    .use(json())

app.use(router.routes())

app.listen(3000, () => {
    debuger('app:entry')
})