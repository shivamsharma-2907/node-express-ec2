var express = require('express');
const {fetchAllData , createData}= require('../controller/data')

const router = express.Router();

router.route('/').get(fetchAllData);

router.route('/createVehicle').post(createData)

module.exports = router;