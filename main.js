#! /usr/bin/env node
const fs = require('fs')
const path = require('path');
const yargs = require('yargs');
const { content, createTableTemplate } = require('./templates/simpleTemplate')
let fileContent  = content
const argv = yargs.options({
    n: {
        type: "string",
        alias: "name",
        description: "migrartion file name",
        default:"migration",
        demandOption: true
    },
    t: {
        type: "string",
        alias: "template", 
        description: "template name", 
        choices: ["ct"], 
        demandOption: false
    },
    f: { 
        type: "string", 
        alias: "filepath" ,
        description: "filepath for migration file", 
        default:"",
        demandOption: false
}
}).argv

if (!argv.n) {
    console.log("migartion file name missing", "\nProcess completed with errors");
    process.exit(0);
}

const current_dir = __dirname+"/../../"
const filepath = argv.filepath
const d = new Date().getTime();
const filename = d+"_"+argv.name+".ts"
const migration_path = path.join(current_dir,filepath,filename);
console.log(migration_path)
switch(argv.template?.toUpperCase()){
    case 'CT':{
        fileContent = createTableTemplate
    }
}

//Create migration file
try {
    fs.writeFileSync(migration_path, fileContent,{encoding:"utf-8"})
    console.log(`${migration_path} \n migration created successfully`)
}catch(err){
    if(err.code === 'ENOENT'){
        console.log(`No such directory, Please create ${migration_path}`)
    }else{
    console.log(err)
    }
}