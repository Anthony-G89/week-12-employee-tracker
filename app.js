const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");



function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What Would you like to do?",
            name: "mainMenu",
            choices: [
                "View All Employee",
                "View All Employess By Department",
                "View All Employess By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update employee Manager"
            ]
        }
    ]).then(res => {

        switch (res) {
            case "Add department, roles, employees":

                break;

            case " View departments, roles, employees":

                break;

            case "Update employee roles":

                break;
        }
        // console.log(res);

    })
};



function addDepartment(){

};

function viewDepartments(){

};

function updateEmployees(){
    
}