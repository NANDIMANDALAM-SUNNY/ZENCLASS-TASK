var express = require('express');
const { getUrls, postUrl, getShortUrl } = require('../controllers/url');
var router = express.Router();
const ShortUrl = require('../models/shortUrl')



/* GET users listing. */
// router.get('/', async (req, res) => {
//     const shortUrls = await ShortUrl.find()
    
//     res.send( { shortUrls: shortUrls });
//   })


// router.get('/',getUrls)
  
// router.post('/shortUrls', async (req, res) => {
//     const postsUrl =  await ShortUrl.create(req.body)
//    res.send({
//      postsUrl:postsUrl
//    })
//  })



//  router.get('/:shortUrl', async (req, res) => {
//     const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
//     if (shortUrl == null) return res.sendStatus(404)
//     shortUrl.clicks++
//     shortUrl.save()
  
//     res.redirect(shortUrl.full)
//   })
  

// router.get('/:shortUrl', async (req, res) => {
//   const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
//   if (shortUrl == null) return res.sendStatus(404)

//   shortUrl.clicks++
//   shortUrl.save()

//   // res.redirect(shortUrl.full)
//   res.send({
//     data:shortUrl
//   })
// })






router.get('/',getUrls)
router.post('/shortUrls',postUrl)
router.get('/:shortUrl',getShortUrl)

module.exports = router;
