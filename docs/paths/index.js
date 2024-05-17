const tasks = require("./tasks")
const users = require("./users")

module.exports = {
    paths: {
        ...tasks,
        ...users
    }
}

