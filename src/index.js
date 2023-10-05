
const express = require('express');


const app = express ();

app.listen(3333);

app.get ('projects', (request, responde) => {
    console.log("server ok")
    return responde.send('Hello Word')
});


 