
const checkTokenMiddleware = (req, res, next) => {
  const tokenCookie = req.cookies.token; 

  if (tokenCookie) {
    next()
  } else {
    res.status(400).send("please login")
  }
};


module.exports = {checkTokenMiddleware};
