const Service = require('egg').Service;

class TopicService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  async index(pwd) {
    // var name = process.argv[2];
    var exec = require('child_process').exec;
    var promise = new Promise(function(resolve, reject) {
      exec('geth account list', function(err, stdout, stderr) {
        resolve(stdout)
      })
    });
    var list = await promise.then(value => {
      return value
    })

    return list;
  }
  async create(name) {
    var newname = name
    return newname;
  }
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = TopicService;