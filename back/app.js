let express = require('express');
const path = require('path');
const app = express();
let cookieparser = require('cookie-parser');



app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('static'));
app.use(cookieparser());
app.use('/user', require('./routes/user.js'))
app.use('/post', require('./routes/post.js'))

app.listen(3105);