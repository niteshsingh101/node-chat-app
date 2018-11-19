const express =  require('express');
var app = express();

const path = require('path');
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
