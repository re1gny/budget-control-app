module.exports = function(ctx, next) {
  if (!ctx.user) {
    ctx.throw(401, 'Пользователь не залогинен');
  }

  return next();
};
