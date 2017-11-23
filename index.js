module.exports = () => async (ctx, next) => {
  if (!ctx.request.accepts('application/json')) {
    ctx.throw(406, 'Not Acceptable')
  }

  ctx.response.type = 'application/json; charset=utf-8'
  await next()
}
