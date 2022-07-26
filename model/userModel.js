const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        unique: true
    },
    admin: {
        type: Boolean
    },
    adminPass: {
        type: String
    },
<<<<<<< HEAD
    code: {
        type: Number
    },
    admin: {
        type: Boolean
    },
    dispatcha: {
=======
    verifiedToken: {
        type: String
    },
    isAdmin: {
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b
        type: Boolean
    },
    avatar: {
        type: String
    },
    avatarID: {
        type: String
<<<<<<< HEAD
    }
=======
    },
    // verifiedToken: {
    //     type: String
    // },
    uploads: [ {
        type: Schema.Types.ObjectId,
        ref: "upload"
    } ]
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b
});

module.exports = mongoose.model("users", userSchema);

