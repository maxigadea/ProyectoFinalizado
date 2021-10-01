const express = require('express');
const app = express();


//MIDDLEWARS
app.use(express.json());
app.use(express.static('public'));

//CORS PODER REALIZAR PETICIONES A MI API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//RUTAS
app.get("/", (req, res) => {
    const imagenes = [
        `http://localhost:5000/imagenes/img1.jpg`, 
        `http://localhost:5000/imagenes/img2.jpg`, 
        `http://localhost:5000/imagenes/img3.jpg`
    ];
    res.json(imagenes);
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
});
