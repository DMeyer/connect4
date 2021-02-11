const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

router.get('/api/user/profile', function (req, res) {
    res.send('/api/user/profile')
})

module.exports = router