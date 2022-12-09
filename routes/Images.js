const express = require('express');
const router = express.Router();
const fs = require('fs');

const videos = require('../mockdata');

router.get('/image/:id', (req, res) => {
    console.log('asdf');

    const filePath = `${videos[req.params.id].poster}`;

    console.log(filePath);

    fs.readFile(filePath, (error, data) => {
        // stop the execution and send nothing if the requested file path does not exist.
        if (error) return
        
        // otherwise, fetch and show the target image
        res.writeHead(200, { 'Content-Type': 'image/jpg' })
        res.end(data, 'utf8')
    
    });

});

module.exports = router;