const express = require('express');
const router = express.Router();
const adsController = require('../controller/ads.controller');
const { checkAuthentication } = require('../middleware/auth'); 
const upload = require('../middleware/upload'); 

router.get('/', adsController.getAllAds);
router.get('/:id', adsController.getAdById);
router.post('/', checkAuthentication, upload.single('image'), adsController.createAd);
router.put('/:id', checkAuthentication, adsController.updateAd);
router.delete('/:id', checkAuthentication, adsController.deleteAd);
router.get('/search/:searchPhrase', adsController.searchAds);

module.exports = router;
