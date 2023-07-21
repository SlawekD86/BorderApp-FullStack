const checkAuthentication = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).send('Brak autoryzacji. Zaloguj się, aby kontynuować.');
  }
};

module.exports = {
  checkAuthentication,
};
