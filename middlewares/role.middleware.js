module.exports = (req, res, next, routeAuthType = "candidate") => {
  try {
    const user = req.user;
    if (user.type == routeAuthType) {
        next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Auth failed!" });
  }
};
