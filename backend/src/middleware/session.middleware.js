const session = require('express-session');

const sessionMiddleware = session({
  secret: 'super_secret_key', // Sekret używany do podpisywania ciasteczek sesji
  resave: false, // Nie zapisujemy sesji na nowo, jeśli się nie zmieniła
  saveUninitialized: true, // Zapisujemy sesję nawet dla niezalogowanych użytkowników
  cookie: {
    maxAge: 3600000, // Czas wygaśnięcia sesji w milisekundach (1 godzina)
    secure: true, // Wymagaj protokołu HTTPS do przesyłania ciasteczek
    httpOnly: true, // Uniemożliwia dostęp do ciasteczek przez przeglądarkę (poprzez JavaScript)
  },
});

module.exports = sessionMiddleware;
