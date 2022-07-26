require('dotenv').config();
const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
<<<<<<< HEAD
const upload = require("../multer");
=======
const { upload } = require("../multer");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b


router.post("/registerAdmin", upload, async (req, res) => {
    try {
<<<<<<< HEAD
        const { email, password, userName, code, admin } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const image = await cloudinary.uploader.upload(req.file.path);

        const createUser = await userModel.create({
            email,
            password: hashed,
            code,
            userName,
            admin: false,
            avatar: image.secure_url,
            avatarID: image.public_id,
        });

        res.status(201).json({
            message: "member created ",
            data: createUser,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }
});
router.get("/:id/:code/verifyAdmin", upload, async (req, res) => {
    try {
        // const { adminPass } = req.body;

        const user = await userModel.findById(req.params.id);
        if (user) {
            if (user.code === 12345678) {
                await userModel.findByIdAndUpdate(user._id, {
                    code: null,
                    admin: true,
                }, { new: true });

                res.status(201).json({
                    message: "Verification complete, you can go sign in now!",
                });
            } else {
                res.status(500).json({
                    message: "You'er not an admin"
                });
            }

        } else {
            res.status(500).json({
                message: "You'er not a user"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.post("/registerDispatcher", upload, async (req, res) => {
    try {
        const { email, password, userName, dispatcha, code } = req.body;
=======
        const { email, password, userName, admin } = req.body;
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const image = await cloudinary.uploader.upload(req.file.path);

        const createUser = await userModel.create({
            email,
            password: hashed,
            userName,
<<<<<<< HEAD
            dispatcha: false,
            code,
=======
            admin,
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b
            avatar: image.secure_url,
            avatarID: image.public_id,
        });

        res.status(201).json({
            message: "Click on that link to verify your account",
            // data: createUser,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.post("/registerAdmin", upload, async (req, res) => {
    try {
        const { email, password, userName, admin, adminPass } = req.body;

        // const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, 10);

        const image = await cloudinary.uploader.upload(req.file.path);

        const tokenValue = await crypto.randomBytes(20).toString('hex');
        const token = await jwt.sign({ tokenValue }, "myVerRRYBigSceret", { expiresIn: "20m" });

        const createUser = await userModel.create({
            email,
            password: hashed,
            userName,
            admin,
            adminPass,
            verifiedToken: token,
            avatar: image.secure_url,
            avatarID: image.public_id,
        });

        res.status(201).json({
            message: "Admin  created ",
            data: createUser,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
        console.log(err);
    }
});
router.get("/:id/:token/verifyAdmin", upload, async (req, res) => {
    try {
        // const { adminPass } = req.body;

        const user = await userModel.findById(req.params.id);
        if (user) {
            if (user.admin == true) {
                if (user.verifyToken !== "") {
                    if (user.adminPass === "salt") {
                        await userModel.findByIdAndUpdate(user._id, {
                            adminPass: "",
                            admin: true,
                            isAdmin: true,
                            verifyToken: "",
                        }, { new: true });

                        res.status(201).json({
                            message: "Verification complete, you can go sign in now!",
                        });
                    } else {
                        res.status(400).json({
                            message: "Invalid admin pass"
                        });
                    }
                } else {
                    res.status(400).json({
                        message: "You do not have a token"
                    });
                }
            } else {
                res.status(500).json({
                    message: "You'er not an admin"
                });
            }

        } else {
            res.status(500).json({
                message: "You'er not a user"
            });
        }

        res.status(201).json({
            message: "member created ",
            data: createUser,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.get("/:id/:code/verifyDispatcha", upload, async (req, res) => {
    try {
        // const { adminPass } = req.body;

        const user = await userModel.findById(req.params.id);
        if (user) {
            if (user.code === 12345678) {
                await userModel.findByIdAndUpdate(user._id, {
                    code: null,
                    Boolean: true,
                }, { new: true });

<<<<<<< HEAD
                res.status(201).json({
                    message: "Verification complete, you can go sign in now!",
                });
            } else {
                res.status(500).json({
                    message: "You'er not a dispatcha"
                });
            }

        } else {
            res.status(500).json({
                message: "You'er not a user"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

=======
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b
module.exports = router;
