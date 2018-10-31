const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    title: String,
    data: {
        type: Date,
        default: Date.now
    },
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
})

module.exports = AlbumSchema
