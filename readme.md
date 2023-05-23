<h1>Typescript Migration for Sequelize</h1>

This package is designed to address the issue of generating migrations using the Sequelize CLI in a TypeScript-based project that utilizes Sequelize.

Sequelize is an ORM (Object-Relational Mapping) library for Node.js that provides easy database access and management. Sequelize migrations are used to manage changes in the database schema over time, allowing developers to make alterations without losing existing data. However, using Sequelize with TypeScript can sometimes present challenges when generating migrations through the Sequelize CLI.

The "typescript-sequelize-migration" package aims to simplify this process by providing a solution specifically tailored for TypeScript-based projects using Sequelize. It likely includes custom functionality or modifications to the Sequelize CLI to ensure seamless migration generation and TypeScript integration.

I personally had tested this npm package with Nestjs and typescript and expressjs based project

<h2>Options Available</h2>
<pre>
Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -n, --name      migrartion file name[string] [required] [default: "migration"]
  -t, --template  template name                         [string] [choices: "ct"]
  -f, --filepath  filepath for migration file             [string] [default: ""]

Note: 
<b> ct: Create Table </b>
</pre>

<h2>Installation</h2>

```bash
#local installation 
npm i --save-dev ts-mig

#Global installation 
npm i -g ts-mig
```

<h2>Usage</h2>
When installed globally you can call the script directly as

```bash
    # create a sequelized based migration
    $ ts-mig

    # create a sequelized based migration named migration
    $ ts-mig -n="{migration file name}"

    # create a sequelized based migration named migration
    $ ts-mig -f="{filepath}"

    #another easy way to create npm script
    #copy paste below line in npm scripts
    "create-migration": " ts-mig -f src/db/migrations"
```
<h1>Working example with Sequelize Nestjs and Typescript Expressjs</h1>
<h3>Prequesites:</h3>

&rarr; Sequelize-cli

&rarr; Sequelize

Steps:
1. Create a .sequelizerc file with following content
   const path = require('path');
<pre>
module.exports = {
'config': path.resolve('.sequelize/config', 'config.json'),
'models-path': path.resolve('dist/db', 'models'),
'migrations-path': path.resolve('dist/db', 'migrations')
};
</pre>

2. Run Command
<pre>
$ sequelize-cli init:config
</pre>

3. Configure command in npm script, add following lines in 
<pre>
"script":{
    "create-migration": "ts-mig -f src/db/migrations"
}
</pre>
run command directly form to create migration file with default file name.
<pre>
$ npm run create-migration
</pre>

or run command directly form to create migration file and provide file name.
<pre>
$ npm run create-migration -- -n={filename}
                  OR
$ ts-mig -f src/db/migrations -n={filename}
</pre>

