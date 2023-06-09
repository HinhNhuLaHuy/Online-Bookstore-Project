const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        genre_name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    }
);

module.exports = mongoose.model('Genre', GenreSchema);
