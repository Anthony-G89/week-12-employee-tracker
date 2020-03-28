const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Agar112405",
    database: "employeeTrackerDB"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    mainMenu();
});

function mainMenu() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What Would you like to do?",
            name: "mainMenu",
            choices: [
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employees",
                "View All Employess By Department",
                "View All Employess By Manager",
                "Update Employee Role",
                "Update employee Manager",
            ]
        }
    ]).then(res => {

        switch (res.mainMenu) {
            case "View All Employees":
                viewEmployees();
                break;

            case " View Department":
                viewDepartment();
                break;

            case "View all Roles":
                viewRoles();
                break;


            case "Add Department":
                addDepartment();
                break;

            case "Add role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee":
                updateEmployees();
                break;


        }

    });
};


function viewEmployees() {
    connection.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;", (err, result) => {
        if (err) throw err;

        // Clean up results to display as table.
        console.table(result);

        mainMenu();
    });

};

function viewDepartment() {
    connection.query("SELECT * FROM departments;", (err, result) => {
        if (err) throw err;

        console.table(result);

        mainMenu();
    });

};

function viewRoles() {
    connection.query("SELECT * FROM roles;", (err, result) => {
        if (err) throw err;

        console.table(result);

        mainMenu();
    });

};

function addDepartment() {

   inquirer.prompt([
        {
            type: "input",
            message: " Which department name",
            name: "department"

        }
    ]).then(answer => {
        connection.query("insert into departments set ?", { name: answer.department }, (err, result) => {
            if (err) throw err;
            console.log("department is added");

            mainMenu();
        })

    });

};

function addRole() {

     inquirer.prompt([
        {
            type: "input",
            message: " Which role would you like to add",
            name: "rolesAdded"

        }
    ]).then(answer => {
        connection.query("INSERT into roles set ?", { title: answer.rolesAdded }, (err, result) => {
            if (err) throw err;
            console.log("role is added");

            mainMenu();
        })

    });

};

function addEmployee() {

    inquirer.prompt([
       {
           type: "input",
           message: " Enter information about your employee",
           name: "employeeInfo"

       }
   ]).then(answer => {
       connection.query("UPDATE employees  roles set ?", {  }, (err, result) => {
           if (err) throw err;
           console.log("Your New employee is added");

           mainMenu();
       })

   });

};

function updateEmployees() {

    connection.query("UPDATE employee ", (err, reult) => {

    })

};











