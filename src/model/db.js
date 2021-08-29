const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1@cluster0.ri5pg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('몽고디비 연결됨'))
    .catch(err => console.log(err))