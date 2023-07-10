const fs = require('fs');
const pck =require('../package.json');
const prompt = require('prompt-sync')();
const { exec } = require("child_process");

let folderName = '../';
const src = './';

const start = (settings) =>{
    
    try {
        if (!fs.existsSync(folderName)) {
        console.log('\nCreating project folder');
        fs.mkdirSync(folderName);
        console.log(`No ${folderName} folder.. creating it`);
        fs.cp(src+'app', folderName+'/app/', {recursive: true}, (err) => {console.log(err)});
        fs.copyFile(src+'.babelrc', folderName+'/.babelrc', (err) => {console.log(err)});
        fs.copyFile(src+'.dockerignore', folderName+'/.dockerignore',  (err) => {console.log(err)});
        fs.copyFile(src+'.gitignore', folderName+'/.gitignore',  (err) => {console.log(err)});
        fs.copyFile(src+'webpack.config.js', folderName+'/webpack.config.js', (err) => {console.log(err)});
        }
        else{
            console.log('folder exists');
            return'failed';
        }
    } catch (err) {
        console.error(err);
        return 'failed';
    }

    try{
        console.log('\nApplying project settings!..')
        fs.writeFileSync(folderName+'/package.json',JSON.stringify(pck,null,2));
        console.log('\nApplying project settings - DONE')
    }catch(error) {
        console.log(error);
        return 'failed';
    }
    return 'success';
}
const readProjectSettings = async () =>{
    pck.name = prompt('Application Name? : ');
    folderName = folderName+pck.name;
    pck.description = prompt('Do you want to add description? <Enter to leave it blank : ');
    pck.author = prompt('Author? <Enter to leave it blank> : ');
    pck.license = prompt('License? <Enter to leave it blank> : ');
    let status = start();
    if(status==='failed'){
        console.warn('Oops something went wrong. Please check above error logs and rerun after fixing the issue');
        return;
    }
    console.log(`Done! Your boiler plate is ready!. \nPlease switch to ${folderName} and start with 'npm i' and then 'npm run start' `);
}

readProjectSettings();


