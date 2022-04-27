const app = require('./app');
const config = require('./app/config');
const mongoose = require('mongoose');

mongoose.connect(config.db.uri)
    .then(function(){
        console.log('Connected to the database');
    })
    .catch(function(err){
        console.log('Cannot connect to the database', err);
        process.exit();
    })

const PORT = config.app.port;
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}.`);
})