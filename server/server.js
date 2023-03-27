const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const port = process.env.PORT;

require('./config/mongoose.config')

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//change dishes routes
const Routes = require('./routes/stores.routes');
Routes(app);

    
app.listen(port, () => console.log(`Listening on port: ${port}`) ); 