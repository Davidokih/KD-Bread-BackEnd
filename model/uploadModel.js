const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
<<<<<<< HEAD
    price: {
        type: Number
    },
    avatar: {
        type: String
    },
    avatarID: {
        type: String
    },
=======
    category: {
        type: String
    },
    avatar: {
        type: String
    },
    avatarID: {
        type: String
    },
    Date: {
        type: Date,
        default: new Date
    },
    comments: [ {
        type: Schema.Types.ObjectId,
        ref: "comment"
    } ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b
});

module.exports = mongoose.model("upload", uploadSchema);