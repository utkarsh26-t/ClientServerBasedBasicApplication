if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));


const movieRoute = require('./Routes/movieRoute.js');
app.use(movieRoute);



app.get('/home', (req, res) => {
    res.render('home')
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server connected at port number: ${port}`);
})