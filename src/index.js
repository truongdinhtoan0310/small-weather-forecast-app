// import expressJS, path & handlerbars
const express = require('express')
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//import route func
const route = require('./routes/index');


//Template Engine
app.engine('hbs', handlebars({
    extname: ".hbs"
  }));

//setup handlerbars engine and views location
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'resources', 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})