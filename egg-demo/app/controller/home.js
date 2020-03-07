'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test() {
    const { ctx } = this
    ctx.body = 'test'
  }
  async list() {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }

  async update(){
    const {ctx} = this
    const params = ctx.request.body
    const result = await ctx.service.diary.update(params)
    console.log(result)
    if (result) {
      ctx.body = {
        status:200,
        data:result
      }
    } else {
      ctx.body = {
        status:500,
        errMsg:'更新失败'
      }
    }
  }

  async add() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const result = await ctx.service.diary.add(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }

  async getDiaryById() {
    const { ctx } = this
    const result = await ctx.service.diary.diaryById(ctx.params.id)
    console.log(result)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }

  async delete() {
    const { ctx } = this
    const { id } = ctx.request.body
    const result = await ctx.service.diary.delete(id)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除失败'
      }
    }
  }


}

module.exports = HomeController;
