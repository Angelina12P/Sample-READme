import inquirer from "inquirer";
import fs from "fs/promises";

let {firstName, lastName} = await inquirer
inquirer.prompt((
    {
            type:'input',
            name:'name',
            message:'Project Title: '
    },
    {
            type:'input',
            name:'description',
            message:'Project Description: '
    },
    {
            type:'input',
            name:'installation',
            message:'Project Installation Requirements: '
    },
    {
            type:'input',
            name:'usage',
            message:'Project Usage Information: '
    },
    {
        type:'list',
        name: 'license',
        message: 'Select Project License: ',
        choices: [ 'MIT', 'Apache 2.0', 'Boost', 'None'],
        filter(val){
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Project Contribution Guidelines: '
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Project Test Instructions: '
      },
      {
        type: 'input',
        name: 'Questions/Contact',
        message: 'Project Questions To Be Sent To (contact info): '
      },
  
))


console.log(firstName, lastName);

let READmeText = `#Project Title
$(ProjectTitle)

##Description
$(ProjectTitle)

##Installation
$(Installation)

##Usage
$(Usage)

##License
$(License)

${generateLicense(license)}

##Contributing
$(Contributing)

##Test
$(ProjectTitle)

##Questions
$(Questions)`

fs.writeFile("README.md", READmeText)

function generateLicense(license){

    if(license === 'MIT'){
    
    return `[![license](https");`
    }
    if(license === 'Apache 2.0'){

        return ``
    }
    if(license === 'Boost'){

        return ``
    }
    else{

        return `No license`;
    }


}
