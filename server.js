const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const testimonial_routes = require('./routes/testimonial_routes');
const docinfo_route = require('./routes/docinfoRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    }


app.use('/', testimonial_routes);
app.use('/docinfo', docinfo_route);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));




