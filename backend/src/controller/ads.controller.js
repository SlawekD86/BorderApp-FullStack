const Ad = require('../models/ad.model');

const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().populate('user', 'login avatar');
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getAdById = async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await Ad.findById(id).populate('user', 'login avatar');
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const createAd = async (req, res) => {
  const { title, content, price, location } = req.body;
  const user = req.session.userId;
  try {
    const ad = await Ad.create({
      title,
      content,
      image: req.file ? req.file.path : undefined,
      price,
      location,
      user,
    });
    res.status(201).json(ad);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updateAd = async (req, res) => {
  const { id } = req.params;
  const { title, content, price, location } = req.body;
  const user = req.session.userId;
  try {
    const ad = await Ad.findByIdAndUpdate(
      id,
      {
        title,
        content,
        price,
        location,
        user,
      },
      { new: true }
    );
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteAd = async (req, res) => {
  const { id } = req.params;
  const user = req.session.userId;
  try {
    const ad = await Ad.findOneAndDelete({ _id: id, user });
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const searchAds = async (req, res) => {
  const { searchPhrase } = req.params;
  try {
    const ads = await Ad.find({ title: { $regex: searchPhrase, $options: 'i' } }).populate('user', 'login avatar');
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd,
  searchAds,
};
