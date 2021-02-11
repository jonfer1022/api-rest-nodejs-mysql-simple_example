const mysql = require('mysql');
const data = require('./dataPrivate.json');
const objectConnection ={
  host: data.mysql.host,
  port: data.mysql.port,
  user: data.mysql.user,
  password: data.mysql.password,
  database: data.mysql.database
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) =>{
  if(error){
    console.log(`There's a error: ${error}`);
  } else {
    console.log(`Connected DataBase`);
  }
})