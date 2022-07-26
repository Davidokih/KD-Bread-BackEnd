const formModel = require('../model/formModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// const transport = require("../utils/email");
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "birthofunicorns@outlook.com",
        pass: "dav517id"
    }
});

const createForm = async (req, res) => {
    try {
        const { userName, email, phone, location, progress, totalPrice, quantity } = req.body;
        const getToken = crypto.randomBytes(32).toString("hex");
        const token = jwt.sign({ getToken }, "ThisIsIt", { expiresIn: "3d" });
        const userForm = await formModel.create({
            userName,
            email,
            phone,
            location,
            totalPrice,
            quantity,
            progress: "pending",
            verifiedToken: token,
        });

        const mailOptions = {
            from: 'birthofunicorns@outlook.com',
            to: email,
            subject: "Account verification",
            html: `
            <h3>
            Goodday my name is ${userForm.userName} 

            </h3>

            <div>
            This is your token ${userForm.verifiedToken}
            </div>
            `,
        };

        transport.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Email has been sent to your inbox", info.response);
            }
        });
        res.status(201).json({
            status: "Success",
            data: userForm
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
        console.log(error);
    }
};
const getUser = async (req, res) => {
    try {
        const get = await formModel.find();

        res.status(201).json({
            status: "Success",
            data: get
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};
const getOneUser = async (req, res) => {
    try {
        const get = await formModel.findById(req.params.id);
        res.status(201).json({
            status: "Success",
            data: get
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const { userName, email, phone, location, progress, totalPrice, quantity, verifiedToken } = req.body;
        const user = await formModel.findById(req.params.id);

        if (user) {

            if (verifiedToken === user.verifiedToken) {
                const get = await formModel.findByIdAndUpdate(req.params.id, {
                    progress: "deliverd"
                }, { new: true });
                res.status(201).json({
                    status: "Success",
                    data: get
                });
            } else {
                res.json({
                    message: "u no get token self"
                });
            }
        } else {
            res.json({
                message: "U da fine free thing abi"
            });
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const get = await formModel.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: "Success",
            data: get
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};

module.exports = {
    createForm,
    getUser,
    getOneUser,
    updateUser
};