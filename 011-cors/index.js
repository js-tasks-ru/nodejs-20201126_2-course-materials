const Koa = require('koa');
const app = new Koa()
const cors = require('koa-cors');
// const Router = require('@koa/router')

// const router = new Router()

// example.com
// https://api.example.com:3000

app.use(cors({}))

app.use((ctx, next) => {
  ctx.response.set("Access-Control-Allow-Origin", "")
  ctx.response.set("Access-Control-Allow-Methods", "")
  ctx.response.set("Access-Control-Allow-Headers", "")

  ctx.body = "hello"
});

// router.get('/path')
// router.use(mw)
// router.get('/path2')


app.listen(3001)

/**

SSO - single sign-on

 OAuth2 / SAML / ActiveDirectory / LDAP

 app1.com
 app2.com

 login.app.com - .app.com
 first.app.com - .app.com
 second.app.com - .app.com

 login.app.com
 app1.com
 app2.com



 */
