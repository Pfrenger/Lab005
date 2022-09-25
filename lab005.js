'use strict';

const { stringify } = require('querystring');
const fs = require('fs/promises');
const { describe } = require('yargs');
const yargs = require('yargs')(process.argv.slice(2))
.option('a', {
    alias: 'add',
    describe: 'add new "TODO" file to todoList',
    demandOption: '--add is required',
    type: 'string'
})
.option('d', {
    alias: 'deleteItem',
    describe: 'deletes an existing "TODO" ',
    demandOption: '--delete is required',
    type: 'string'
})
.option('l', {
    alias: 'list',
    describe: 'lists the existing "TODO" file ID',
    demandOption: '--list is required',
    type: 'string'
})
.option('f', {
    alias: 'file',
    describe: 'Stores "TODO" in a new file',
    demandOption: '--file is required',
    type: 'string'
})
.option('h', {
    alias: 'help',
    describe: 'Displays a list of available options',
    demandOption: '--help is required',
    type: 'string'
})
.showHelpOnFail();

const { add, deleteItem, list, file, help } = yargs.argv;
const doWork = async () => {
const fileContents = await fs.readFile(input, { encoding: 'utf8', flag: 'r'});
const vehicles = JSON.parse(fileContents);

}

// Do our TODO logic:
//Check if file exsists  
let fileExists = false
try {
  await fs.stat(file);
  fileExists = true 
} catch (ex) {
fileExists = false 
}

//do add logic if asked 
if (add) {
//does the file exist 
if (fileExists) {
  //read file into mempory (parse)
  const fileContents = await fs.readFile(file, {encoding: 'utf8', flag: 'r'});
  const todoList = JSON.parse(fileContents);
  todoList.push({
    name: add, 
    dateCreated: new Date(),
    id: 1
    });

    await fs.writeFile(file, JSON.stringify(todoList));

  };= else {
    
  }
};



