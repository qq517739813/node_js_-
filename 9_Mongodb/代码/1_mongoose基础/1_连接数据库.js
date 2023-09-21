const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open', () => {
    console.log('open connection');
    
})
mongoose.connection.on('close', () => {
    console.log('close connection');
});

mongoose.connection.on('error', () => {
    console.log('connection error');
});

// mongoose.disconnect();