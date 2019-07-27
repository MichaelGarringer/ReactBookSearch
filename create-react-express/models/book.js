const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, require: true },
    author:{ type: String },
    link: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    id: { type: String, required: true, unique: true}
});

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;