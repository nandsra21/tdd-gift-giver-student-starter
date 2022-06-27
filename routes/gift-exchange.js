const express = require('express')
const { pairs } = require('../models/gift-exchange')
const router = express.Router()
const Gift = require('../models/gift-exchange')

router.post("/traditional", async(req, res, next) => {
    try {
    // const user = req.body.user
    const gifts = await Gift.traditional(req.body.names)
    res.status(200).json(gifts)
    }
    catch (err) {
        next(err)
    }
})

router.post("/pairs", async (req, res, next) => {
    try {
    const gifts = await Gift.pairs(req.body.names)
    res.status(200).json(gifts)
    }
    catch(err) {
        next(err)
    }
})
module.exports = router