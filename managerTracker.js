const mysql = require ("mysql");
const inquirer = require ("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "roots",
    password: "",
    database: "employeeTrackerDB"
});

connection.connect( err =>{
    if(err) throw err;

    Start();
});


