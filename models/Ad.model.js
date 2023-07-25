const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pubDate: { type: Date, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Ads', adsSchema);
