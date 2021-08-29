const iq = require('inquirer')
const fs = require('fs')
const util = require('util')

const initPrompt = [{
    type: 'input',
    name: 'managerName',
    message: `Enter team manager's name`
},{
    type: 'input',
    name: 'managerID',
    message: 'enter employee ID'
},{
    type: 'input',
    name: 'managerEmail',
    message: 'enter manager email'
},{
    type: 'input',
    name: 'officeNumber',
    message: 'enter office number'
}]

const teamPrompt = [{
    type: 'list',
    name: 'memberSelect',
    choices: ['Engineer', 'Intern']
},{
    type: 'input',
    name: 'name',
    message: 'enter employee name'
},{
    type: 'input',
    name: 'id',
    message: 'enter employee ID'
},{
    type: 'input',
    name: 'email',
    message: 'enter employee email'
},{
    type: 'input',
    name: 'git',
    message: 'enter employees github username',
    when (answers) {
        let validate = 'Engineer'
        return answers.memberSelect && answers.memberSelect.includes(validate)
    }
},{
    type: 'input',
    name: 'school',
    message: 'enter employees school',
    when (answers){
        let validate = 'Intern'
        return answers.memberSelect && answers.memberSelect.includes(validate)
    }
}]

//function to initialize the application
function init(){
    const promptFinished = 
    iq.prompt(initPrompt)
}

init();