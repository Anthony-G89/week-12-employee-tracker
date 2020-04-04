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
                "Quit"
            ]
        }
    ]).then(res => {

        switch (res.mainMenu) {
            case "View All Employees":
                viewEmployees();
                break;

            case "View All Departments":
                viewDepartment();
                break;

            case "View All Roles":
                viewRoles();
                break;


            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee":
                updateEmployees();
                break;

            case "Quit":
            default:
                connection.end();


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

     return inquirer.prompt([
        {
            type: "input",
            message: " What department name would you like to add?",
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

   return inquirer.prompt([
        {
            type: "input",
            message: " Which title would you like to add",
            name: "title"

        },
        {
            type: "input",
            message: "Enter your salary",
            name: "salary"
        },
        {
            type: "input",
            message: "Please enter your department ID",
            name: "department_id"
        }

    ]).then(answer => {
        connection.query("INSERT into roles set ?", { title: answer.title, salary: answer.salary, department_id: answer.department_id  }, (err, result) => {
            if (err) throw err;

            console.log("role is added");

            mainMenu();
        })

    });

};

function addEmployee() {

    return inquirer.prompt([
        {
            type: "input",
            message: "please enter employee first name",
            name: "firstName"

        },
        {
            type:"input",
            message: "Please enter employee last name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Enter employee role ID",
            name: "emplyoeeId"
        },
        {
            type: "input",
            message: "Please enter manager ID",
            name: "managerId"
        }
    ]).then(answer => {
        connection.query("INSERT INTO employees set ?", {first_name: answer.firstName, last_name: answer.lastName, role_id: answer.emplyoeeId, manager_id: answer.managerId}, (err, result) => {
            if (err) throw err;

            console.log("Your New employee is added");

            mainMenu();
        });

    });

};

function updateEmployees() {

    return inquirer.prompt([
        {
            type: "input",
            message: "Which employee would you like to update?",
            name: "updatingEmployee"

        },
        {
            type:"input",
            message: "Which role do you want to assign the selected employee?",
            name: "updatingRole"
        },
       
    ]).then(results  => {
    connection.query("UPDATE employee SET role_id = ? WHERE roles_id = ?", {firstName:answer.updateEmployees, last_name: answer.lastName}, (err, result) =>{
        if(err) throw err;

        console.log("Employee is updated");
        
        mainMenu();
    });

    
});

};





// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//     if (error) throw error;
//     // ...
//   });





