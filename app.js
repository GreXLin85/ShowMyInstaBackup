const inquirer = require("inquirer");
const { CheckWhichFilesHaveData, directoryToName, Devices, Comments } = require("./Core/Core")
console.log(require('boxen')('ShowMyInstaBackup\nV1', {padding: 1}));
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menuname',
      message: 'Choose one...',
      choices: directoryToName(CheckWhichFilesHaveData())
    },
  ])
  .then((answer) => {
    switch (answer.menuname) {
      case "devices":
        console.log(Devices())
        break;
      case "comments":
        console.log(Comments())
        break;
      default:
        console.log("Other parts are not ready.")
        break;
    }

  });
