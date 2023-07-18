const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (err.name === 'ValidationError') {
    status = 400;
  }

  console.error(err);

  res.status(status).json({ error: message });
};

module.exports = errorHandler;
