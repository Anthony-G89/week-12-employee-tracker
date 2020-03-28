const mysql = require ("mysql");
const inquirer = require ("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Agar112405",
    database: "employeeTrackerDB"
});

connection.connect( err =>{
    if(err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    mainMenu();
});

function mainMenu() {
    return inquirer.prompt([
         {
             type: "rawlist",
             message: "What Would you like to do?",
             name: "mainMenu",
             choices: [
                 "View All Employee",
                 "View All Employess By Department",
                 "View All Employess By Manager",
                 "Add Employee",
                 "Remove Employee",
                 "Update Employee Role",
                 "Update employee Manager",
             ]
         }
     ]).then(res => {
 
         switch (res.mainMenu) {
             case "Add department, roles, employees":
                 addDepartment();
                 break;
 
             case " View departments, roles, employees":
                 viewDepartments();
                 break;
 
             case "Update employee roles":
                 updateEmployees();
                 break;

    
         }
         // console.log(res);
 
     })
 };

 function addDepartment() {
     const query = "";
     connection.query()

};

function viewDepartments() {
    connection.query("SELECT employee.first_name,employee.last_name,employee.title,employee.salary, role.title AS title,role.salary AS salary, role.department AS department FROM employee INNER join role ON employee.role_id = role.role.id INNER join department ON employee.role_id = department.role.id", (err, result)=>{
        if(err) throw err;

        

    })

};

function updateEmployees() {
    const query = "";
    connection.query()

};











