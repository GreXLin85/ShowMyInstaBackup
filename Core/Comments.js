let comments = JSON.parse(require("fs").readFileSync("./backup/comments.json",{encoding: "utf8"})).media_comments


module.exports = () => {
    const {GetUsername} = require("./Core")
    let a = ""
    for (let i = 0; i < comments.length; i++) {
        a += GetUsername+" : "+comments[i][1]+
        "\n Page : "+comments[i][2]+
        "\n Date : " + new Date(comments[i][0]).toLocaleDateString() + " " + new Date(comments[i][0]).toLocaleTimeString() +
        "\n-------------------\n"
    }
    return a
}