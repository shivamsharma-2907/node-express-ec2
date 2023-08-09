var data = require('../mockData')
const fs = require('fs');

const fetchAllData = async (req, res) => { 
    res.status(200).json(data);
};

const createData = async (req, res) => { 
    let body = req.body;
     await data.push(body);
        fs.writeFile('mockData.json', JSON.stringify(data), function(err) {
            if(err) throw err;
            console.log('updated');
            });
        res.status(201).json(data); }

       
// const compare = async (VIN) =>  {
// for(i=0; i<data.length(); i++){
//     console.log(data[i].VIN )
//     console.log(VIN)
//     if(!(VIN in data)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// }

module.exports = { fetchAllData , createData } 