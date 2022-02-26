const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//initialization
const app = express();

//variables
app.set('port', process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(cors({origin:'http://localhost:4200'}));

//routers
app.use('/api/ToLearn',require('./routers/main/main.main'));




//start server
app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'));
});