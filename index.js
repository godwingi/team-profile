// const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const generateHtml = require('./src/HTMLtemplate')

const employeeInfo = [];

// const card = require("./lib");
function newEmployee() {
inquirer
     .prompt([
        // {
        //   type: "input",
        //   name: "name",
        //   message: "What is your name?",
        // },
        // {
        //   type: "input",
        //   name: "id",
        //   message: "What is your ID?",
        // },
        // {
        //   type: "input",
        //   name: "email",
        //   message: "What is your email?",
        // },
        {
          type: "list",
          name: "role",
          message: 'What is your role?',
          choices: ['Manager', 'Engineer', 'Intern'],
        },
      ])
      .then((response) => {
      // const employeeInfo = [];

      // employeeInfo.push(response);

      //  console.log(employeeInfo)

       if(response.role === 'Manager') {
        addManager()
       }
      })
    }

      function addManager() {
        console.log("This is the Manager!")

        inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your ID?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email?",
          },
        ])
        .then((response) => {
          const newManager = new Manager(
            response.name
          ) 
          
          employeeInfo.push(newManager);

          // console.log(employeeInfo)

          // console.log(newManager) // push into Global variable
          addEmployee()
        })

      }

      function addEmployee() {
        inquirer
     .prompt([
        {
          type: "list",
          name: "employee",
          message: 'Do you want to add another employee?',
          choices: ['Yes', 'No'],
        },
      ])
      .then((response) => {
        if(response.employee === 'Yes'){
          newEmployee();
        } else {
          createHtml();
        }
      })
      }

      function createHtml() {
        const pageHtml = generateHtml(employeeInfo)
        console.log(pageHtml)
      }

      newEmployee();