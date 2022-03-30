// db
const mongoose = require('mongoose')
const user = process.env.USER
const pass = process.env.PASS
const dbname = process.env.DBNAME
// mongodb+srv://veterinary:<password>@cluster0.kz53h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const uri = `mongodb+srv://${user}:${pass}@cluster0.kz53h.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then(() => console.log('mongodb connected'))
    .catch(e => console.log('mdb error', e))
