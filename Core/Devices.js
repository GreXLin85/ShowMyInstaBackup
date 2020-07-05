let devices = JSON.parse(require("fs").readFileSync("./backup/devices.json", { encoding: "utf8" })).devices

module.exports = () => {
    let a = ""
    for (let i = 0; i < devices.length; i++) {
        a += "Device ID : " + devices[i].device_id +
            "\nUser Agent : " + devices[i].user_agent +
            "\nDate : " + new Date(devices[i].last_seen).toLocaleDateString() + " " + new Date(devices[0].last_seen).toLocaleTimeString() +
            "\n-------------------\n"
    }
    return a
}