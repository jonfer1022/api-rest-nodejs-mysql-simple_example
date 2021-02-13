'use strict'
global.rootRequire = path => require(`${__dirname}/${path}`);
const app = require('./app/app');

//Database
require('./config/connection');

app.listen(app.get('port'), (error)=>{
  error ?
  console.log(`There was an error: ${error}`):
  console.log(`Server running on port: ${app.get('port')}`)
})

// console.log("This is my server");
