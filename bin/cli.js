
const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv(2);
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ARi2692/create-react-web3-app.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code -1);

console.log(`Installing dependecies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if(!installedDeps) process.exit(code -1);

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm start`)