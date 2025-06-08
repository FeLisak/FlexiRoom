function ensureAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.id) {
    return next();
  }
  return res.redirect("/");
}

module.exports = ensureAuthenticated;