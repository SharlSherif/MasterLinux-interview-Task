const mongoose = require('mongoose');

// mongoDB conection
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }) // DeprecationWarning solved
    .then(() => {
        console.log('connected to database');
    })
    .catch(() => {
        console.log('failed to connect to database');
    });
