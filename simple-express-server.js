const express = require('express')

const port = 3070;

const app = express();

app.use(express.static('public'))

app.listen(port, (err) =>{
    if(err){
        console.log('server did not start properly')
    }
    console.log(`Server running on port: ${port}`)
});
