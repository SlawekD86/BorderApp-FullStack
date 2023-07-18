const multer = require('multer');

// Konfiguracja przechowywania plików na serwerze
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); 
    const originalExtension = file.originalname.split('.').pop(); 
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + originalExtension); 
  },
});

// Określenie warunków dla multer
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); 
  } else {
    cb(new Error('Nieprawidłowy typ pliku. Dozwolone tylko pliki JPEG i PNG.'), false); // Odrzucenie pliku
  }
};

// Konfiguracja multer z wykorzystaniem wcześniej zdefiniowanych warunków
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, 
  },
  fileFilter: fileFilter,
});

module.exports = upload;
