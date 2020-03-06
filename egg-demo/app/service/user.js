'use strict'

const Service = require('egg').Service


class UserService extends Service {
    async user() {
        return {
            title: "标题",
            content: "内容"
        }
    }
}

module.exports = UserService