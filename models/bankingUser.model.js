const mongoose = require('mongoose');

const bankUser = new mongoose.Schema({
    image : {type : String , default:null},
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        default: ['Active', 'Inactive'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('BankingUser', bankUser);