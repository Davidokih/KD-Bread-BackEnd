const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    location: {
        type: String
    },
    verifiedToken: {
        type: String
    },
    progress: {
        type: String
    },
    totalPrice: {
        type: Number
    },
    quantity: {
        type: Number
    },
});

module.exports = mongoose.model("userForm", formSchema);

