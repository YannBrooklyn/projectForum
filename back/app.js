let express = require('express');
const path = require('path');
const app = express();
let cookieparser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv').config({path: "././.env"});
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: '*'
}))

app.use(express.static('static'));
app.use(cookieparser());
app.use('/user', require('./routes/user.js'))
app.use('/post', require('./routes/post.js'))
app.use('/categorie', require('./routes/categorie.js'))
app.use('/com', require('./routes/com.js'))
app.use('/likepost', require('./routes/likepost.js'))
app.use('/likecom', require('./routes/likecom.js'))
app.use('/role', require('./routes/role.js'))
app.use('/setting', require('./routes/setting.js'))


app.listen(process.env.PORT);