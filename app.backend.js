const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB!');
        return true;
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        return false;
    });