function ensureAdmin(req, res, next) {
  if (req.session.user && req.session.user.isAdmin) {
    return next();
  }
  return res.redirect("/rooms-to-reserve");
}

module.exports = ensureAdmin;