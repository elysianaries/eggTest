const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  a: { type: 'string' },
  b: {type: 'string', required: false},
  c: {type: 'string'}
};

class TopicController extends Controller {
  async index() {
    // get 接口
    const ctx = this.ctx;
    console.log(ctx.query.pwd)
    const id = await ctx.service.topics.index(ctx.query.pwd);
    // console.log(id)
    ctx.body = {
      message: id
    };
    ctx.status = 200;
  }

  async create() {
    // post 接口
    const ctx = this.ctx;
    console.log(ctx.request.body)
    ctx.validate(createRule);
    const res = await ctx.service.topics.create(ctx.request.body)
    ctx.body = {
      data: res
    }
    ctx.status = 200
  }
}
module.exports = TopicController;