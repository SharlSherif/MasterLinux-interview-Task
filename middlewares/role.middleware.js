module.exports = (req, res, next, routeAuthType = "candidate") => {
  const user = req.user;
  if (user.type == routeAuthType) {
    next();
  } else {
    res.status(403).json();
  }
};
