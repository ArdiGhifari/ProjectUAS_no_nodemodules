// (4) buat schema Menu
const mongoose = require('mongoose')

const MakananSchema = 
mongoose.Schema({
    //Buat Schema Data

    nama_makanan: {
        type: String,
        required: true
    },

    harga_makanan: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Makanan',MakananSchema)