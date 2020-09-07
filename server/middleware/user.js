exports.validateUser = (req, res, next) => {
  const { firstName, lastName, email, password, description } = req.body;
  if (!firstName || !lastName || !email || !password || !description)
    res.status(409).send("Missing mandatory parameters");
  next();
};
