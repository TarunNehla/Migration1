const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true , unique: true},
    Password: { type: String, required: true },
    quote: {type: String},
},
{collection: 'user-data'}
);

const model = mongoose.model('UserSchema', userSchema);

module.exports = model;