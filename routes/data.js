const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Collected data received');
})

router.post('/activity', (req, res) => {
    console.log(req.body);
    res.send('Activity data received');
})

module.exports = router;