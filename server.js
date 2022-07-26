require('dotenv').config();
require("./config/db");
const express = require('express');
const port = process.env.PORT || 3554;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('', express.static('./uploads'));

<<<<<<< HEAD
app.use("/", require("./router/router"));
app.use("/", require("./otherFileControl/signUp"));
app.use("/api/user", require("./router/formRouter"));

app.use("/api/post",
    require('./controller/uploadController'));
=======
app.use("/api/user", require("./router/router"));
app.use("/api/user", require("./otherFileControl/signUp"));

app.use("/api/user",
    require('./controller/uploadController'));
app.use("/", require('./controller/commentController'));
>>>>>>> ac33d0fc06eaefdc8c8333ca0bb89955f553ee4b

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
