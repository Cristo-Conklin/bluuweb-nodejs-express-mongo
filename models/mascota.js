const mongoose = require('mongoose')
const {
    Schema
} = mongoose;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String,
    date: {
        type: Date,
        default: Date.now
    },
    //hidden: Boolean,
});

const Mascota = mongoose.model('Mascota', mascotaSchema)

module.exports = Mascota
