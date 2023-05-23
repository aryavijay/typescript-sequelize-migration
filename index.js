const fs  = require('fs')
const path = require('path');
const yargs = require('yargs');
const {content, createTableTemplate} = require('./templates/simpleTemplate')

const argv = yargs
    .command(['n', 'name'], 'Migration file name',{
        name: {
            describe: "migrations file name"
        }
    })
    .command('template', 'Choose template for create table',{
        name: {
            describe: `CT: Create table`
        }
    })
    .help()
    .argv;

if(!argv.name){
    console.log("migartion file name missing","\nProcess completed with errors");
    process.exit(0);
}

const filepath = __dirname
const d = new Date().getTime();
const filename = d+"_"+argv.name+".ts"
const migration_path = path.join(filepath, "src/db/migrations/",filename);
console.log(migration_path);
let fileContent = ""
switch(argv.template?.toUpperCase()){
    case 'CT':
        fileContent = createTableTemplate;
        break;
    default:
        fileContent = content
}
try {
    fs.writeFileSync(migration_path, fileContent,{encoding:"utf-8"})
    console.log(`${migration_path} created successfully`)
}catch(err){
    console.log(err)
}
