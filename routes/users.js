const express = require('express');
const {findUserByEmail, findUserById} = require('../models/user');
const router = express.Router();

router.get('/email', express.urlencoded(), async (req, res) => {
    const user = await findUserByEmail(req.body.email);
    res.send(user);
});

router.get('/:id', async (req, res) => {
    const user = await findUserById(req.params.id);
    res.send(user);
});

module.exports = router;