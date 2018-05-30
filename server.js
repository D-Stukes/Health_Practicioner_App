const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const testimonialRoute = require('./routes/testimonial_routes');
// const docinfoRoute = require('./routes/docinfoRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    }

// app.get('/', docinfoRoute);
app.use('/testimonials', testimonialRoute);
// app.use('/docinfoRoute/', docinfoRoute);

// app.get('/docinfo', docinfoRoute);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));




