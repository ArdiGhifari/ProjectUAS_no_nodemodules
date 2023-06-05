//(5) Buat Router Menu
const express = require('express')
const router = express.Router()
const Makanan = require('../models/Makanan')

// Import verifyToken
const verifyToken = require('../config/verifyToken')

// Create api
router.post('/', async(req, res) => {
    
    //Tampung input Data
    const makananPost = new Makanan({
        nama_makanan: req.body.nama_makanan,
        harga_makanan : req.body.harga_makanan,
    })

    try{
        //simpan data
        const makanan = await makananPost.save()

        //beri response
        res.json(makanan)
    } catch(error){
        res.json({message: error})
    }
})

// Read API
router.get('/', verifyToken,async(req, res) => {

    try{
        const makanan = await Makanan.find()

        //beri response
        res.json(makanan)
    } catch(error){
        res.json({message: error})
    }
})

module.exports = router