import inquirer from "inquirer";
import fs from "fs/promises";



let response = await inquirer 
.prompt([
    {
        type:'input',
        name:'projectTitle',
        message:'Project Title: ',
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
        choices: ['MIT', 'Apache 2.0', 'Boost', 'None'],
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
        name: 'contactQs',
        message: 'Project Questions To Be Sent To (contact info): '
    },

])




let READmeText = 

`# **Project Title**  
${response.projectTitle}

## **Description**  
${response.description}

## **Table of Contents**  
- [Installation](##installation)
- [Usage](##usage)
- [License](##license)
- [Contributing](##contributing)
- [Tests](##tests)
- [Questions](##questions)

## **Installation**  
${response.installation}

## **Usage**  
${response.usage}

## **License**  
${response.license}

${generateLicense(response.license)}

## **Contributing**  
${response.contributing}

## **Test**  
${response.tests}

## **Questions**  
${response.contactQs}` ;



function generateLicense(license){
    
    if(license === 'MIT'){
        
        return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if(license === 'Apache 2.0'){
        
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if(license === 'Boost'){
        
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else{
        
        return `No license`;
    }
    
}


fs.writeFile("README.md", READmeText)