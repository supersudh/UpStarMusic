// Todo: create Album Schema

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

module.exports = AlbumSchema;