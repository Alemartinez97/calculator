const express=require('express');
const app = express();
const calculator = require('./routers/calculator');

const PORT = 4000; 


app.use(express.json());

app.use(calculator);

app.listen(PORT, () => console.log('Starting app in port $(PORT)'));
