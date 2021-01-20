const express = require("express");
const app = express();

const ledRouter = require("./routes/led");

app.use("/led", ledRouter);

app.get('/', function (req, res) {
    res.send('Index');
  });
  
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});