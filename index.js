const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./src/HTMLtemplate')

const employeeInfo = [];

function newEmployee() {
inquirer
     .prompt([
        {
          type: "list",
          name: "role",
          message: 'What is your role?',
          choices: ['Manager', 'Engineer', 'Intern'],
        },
      ])
      .then((response) => {
       if(response.role === 'Manager') {
        addManager()
       }
       if(response.role === 'Engineer') {
        addEngineer()
       }
       if(response.role === 'Intern') {
        addIntern()
       }
      })
    }

    function addIntern() {
      console.log("This is the Intern!")

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
        {
          type: "input",
          name: "school",
          message: "What school do you go to?",
        },
      ])
      .then((response) => {
        const newIntern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        ) 
        
        employeeInfo.push(newIntern);

        addEmployee()
      })

    }

    function addEngineer() {
      console.log("This is the Engineer!")

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
        {
          type: "input",
          name: "github",
          message: "What is your github username?",
        },
      ])
      .then((response) => {
        const newEngineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        ) 
        
        employeeInfo.push(newEngineer);

        addEmployee()
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
          {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
          },
        ])
        .then((response) => {
          const newManager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
          ) 
          
          employeeInfo.push(newManager);

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

        fs.writeFile('./dist/index.html', pageHtml, (err) => {
          // console.error(err)

          if(err){
            throw new Error('Error rendering page', err)
          }
        })

        // console.log(pageHtml)
      }

      newEmployee();