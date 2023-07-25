const fs = require('fs');
const Ads = require('../models/Ad.model');
const getImageFileType = require('../utils/getImageFileType');

exports.getAll = async (req, res) => {
  try {
    const ads = await Ads.find().populate('user');
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const advert = await Ads.findById(req.params.id).populate('user');
    if (!advert) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      res.json(advert);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addAd = async (req, res) => {
  try {
    const { title, description, pubDate, price, location } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (
      title &&
      description &&
      price &&
      location &&
      pubDate &&
      req.file &&
      ['image/png', 'image/jpeg', 'image/gif'].includes(fileType) &&
      fileType !== 'unknown'
    ) {
      const newAdvert = new Ads({
        title,
        description,
        pubDate,
        image: req.file.filename,
        price,
        location,
        user: req.session.user.id,
      });
      await newAdvert.save();
      res.status(201).json({ message: 'Ok' });
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const advert = await Ads.findById(req.params.id);
    if (advert) {
      await Ads.deleteOne({ _id: req.params.id });
      res.json({ message: 'Deleted' });
    } else {
      res.status(404).json({ message: 'Not found...' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAd = async (req, res) => {
  const { title, description, pubDate, price, location } = req.body;
  try {
    const advert = await Ads.findById(req.params.id);
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (advert) {
      advert.title = title;
      advert.description = description;
      advert.pubDate = pubDate;
      advert.price = price;
      advert.location = location;
      if (req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)) {
        advert.image = req.file.filename;
      }
      const updatedAdvert = await advert.save();
      res.json(updatedAdvert);
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(404).json({ message: 'Not found...' });
    }
  } catch (err) {
    if (req.file) {
      fs.unlinkSync(`./public/uploads/${req.file.filename}`);
    }
    res.status(500).json({ message: err.message });
  }
};

exports.searchPhrase = async (req, res) => {
  const { searchPhrase } = req.params;
  try {
    const advert = await Ads.find({ $text: { $search: searchPhrase } });
    if (!advert || advert.length === 0) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      res.json(advert);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
