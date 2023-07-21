const session = require('express-session');

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, // Czas wygaśnięcia sesji w milisekundach (1 godzina)
    secure: true, // Wymagaj protokołu HTTPS do przesyłania ciasteczek
    httpOnly: true, // Uniemożliwia dostęp do ciasteczek przez przeglądarkę (poprzez JavaScript)
  },
});

module.exports = sessionMiddleware;
