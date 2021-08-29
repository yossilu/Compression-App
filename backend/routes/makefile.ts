import express from 'express';
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const stringify = require('csv-stringify');
/* 
*
 Route to the transactions Controller
*
*/
router.post('/', async (req, res) => {
    let data = await req.body;
    JSON.stringify(data)
    fs.writeFile('./files/compressedData.csv', JSON.stringify(data), 'utf-8', (err: any) => {
        if(err) {
            console.log(err)
        } else {
            console.log("it saved")
        }
    });
    res.json('File Saved Successfully')
}); 





export default router;