const express = require('express');

const app = express(); //Basic ex server
const cors = require('cors');
const port = process.env.PORT || 8081;

app.use(cors());// Cross origin res sharing
app.use(express.json());// Allowing our server to accept json data
app.get('/',(request,response)=>{// Send a response to the user
    console.log('Basic backend is Biggy');
    response.status(200).send('Basic backend is running');
});
app.post('/',(request,response)=>{// Request comes from the user 
    const data = request.body;
    console.log('data',data);
    response.status(500).send(data);
});
app.delete('/',()=>{

})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})