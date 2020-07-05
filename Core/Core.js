module.exports.Comments = require(`${__dirname}/Comments`)
module.exports.Devices = require(`${__dirname}/Devices`)

module.exports.GetUsername = JSON.parse(require("fs").readFileSync("./backup/profile.json", { encoding: "utf8" })).username

module.exports.CheckWhichFilesHaveData = () => {
    let filesInBackupDirectory = [
        'account_history.json',
        'autofill.json',
        'comments.json',
        'connections.json',
        'devices.json',
        'guides.json',
        'information_about_you.json',
        'likes.json',
        'media.json',
        'messages.json',
        'profile.json',
        'saved.json',
        'searches.json',
        'seen_content.json',
        'settings.json',
        'shopping.json',
        'stories_activities.json',
        'uploaded_contacts.json'
    ]
    useableFilesInBackupDirectory = []
    for (let i = 0; i < filesInBackupDirectory.length; i++) {
        if (JSON.parse(require("fs").readFileSync("backup/" + filesInBackupDirectory[i], { encoding: "utf8" }))[0] != 'You have no data in this section') {
            useableFilesInBackupDirectory.push("backup/" + filesInBackupDirectory[i])
        }
    }
    return useableFilesInBackupDirectory
} /*Sensiz şehir ölüler ve ben*/
module.exports.directoryToName = (filesInBackupDirectory) => {
    let a = [], b
    for (let i = 0; i < filesInBackupDirectory.length; i++) {
        b = this.splittedArrayToString(filesInBackupDirectory[i].split("/")[1].split(".")[0].split("_"))
        a.push(b.substr(0, b.length - 1))

    }
    return a
} 
module.exports.splittedArrayToString = (splittedArray) => {
    let a = ""
    for (let i = 0; i < splittedArray.length; i++) {
        a += splittedArray[i] + " ";
    }
    return a
}
module.exports.nameToDirectory = (name) => {
    return "backup/" + name.replace(" ", "_") + ".json"
}