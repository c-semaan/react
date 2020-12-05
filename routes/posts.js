const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (reg, res) => {
    res.send('We are on posts');
});

router.get('/specific', (reg, res) => {
   res.send('We are on specific posts');
});

router.post('/', (req, res) => {
    const post = new Post({
        cardHolder: req.body.title,
        cardNumber: req.body.description,
        expiryDate: req.body.description,

        cvc: req.body.description,

        email: req.body.description,

        amount: req.body.description,

    });
    post.save()
        .exec()
        .then(data => {
        res.json(data);
        });
});

module.exports = router;