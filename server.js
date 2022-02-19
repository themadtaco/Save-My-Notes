const { urlencoded } = require('express');
const express = require('express');

// routes imported
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// using html/api routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// makes public folder available to use
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}`);
});