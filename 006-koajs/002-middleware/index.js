const Koa = require('koa');

// since v15
const {setTimeout} = require('timers/promises')

const app = new Koa();

// http.createServer(app.callback())
// https.createServer(app.callback())

// GET / 250ms

app.use(async (ctx, next) => {
  const start = Date.now();

  await next();

  const time = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} ${time}ms`);
});

app.use(async (ctx, next) => {
  await setTimeout(250)
  ctx.body = "hello";
  ctx.status = 200;
});


app.listen(3000, () => {
});


/**
 *  req -> m1 -> m2 -> m3 -> m2 -> m1 -> res
 *        log   auth   bl     -    log
 */
