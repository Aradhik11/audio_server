const express = require('express');
const fs = require('fs');
const app = express();



app.get('/', (req,res)=>{
    res.end('hello welcome to the server');
    
});
app.get('/audio',(req,res) => {
    res.status(200);
    res.header({'Content-Type': 'audio/mp3'})
    fs.exists('audio.mp3', (exists)=>{
        if(exists){
            var readStream = fs.createReadStream('audio.mp3');
            readStream.pipe(res);
        }else{
            res.end('error 404');
        }
    });
})


app.listen(3000,()=> {
    console.log('you are connect to port 3000')
});
