// (1) Definisikan Module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
require('dotenv/config')
const cors = require('cors')

app.use(cors())
// (6) middleware body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// (7) import routes
const makananRoutes = require('./routes/makanan')

//(8) app.use (Mendaftarkan middleware baru ke Express)
app.use('/makanan', makananRoutes)
app.use('/auth', authRoutes)



//(3) Koneksi ke database MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection

// error : jika user/password mongodb salah
db.on('error', console.error.bind(console,'Koneksi Ke mongoDB Error'))

//success : user/password mongodb benar
db.once('open',() => {
    console.log('Terhubung ke Database MongoDB');
})

//(2) Listen Port dan buat callback
app.listen(process.env.PORT, ()=> {
    console.log(`Server Berjalan pada port ${process.env.PORT}`);
})

