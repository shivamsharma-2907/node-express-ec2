var express = require('express');
const data_routes = require('./routes/data')

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = process.env.PORT || 8080;

//HomePage
app.get('/',  (req, res) => {
    res.send("Hello welcome to Data generator tool");
  })


  //Start app
  const start = async () => {

    try {
       app.listen(PORT, () => {
          console.log(`Server is live on port:${PORT} `)
       })
    }
    catch(error) {
       console.log(error);
    }
 } 
 
 start()

 //middlewear
 app.use('/data', data_routes);