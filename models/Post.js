const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({

    cardHolder: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    cvc: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
        
    }
});

module.exports = mongoose.model('Posts', PostSchema);