//logic of checking if a request is authorized
const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("Unauthorized!");
  } else {
    next();
  }
};

const userAuth = (req, res) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("Unauthorized User!");
  } else {
    res.send();
  }
};

module.exports = { adminAuth, userAuth };
