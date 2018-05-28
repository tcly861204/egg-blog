'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  /* 查询*/
  async findAll() {
    return this.ctx.model.User.find({}).sort({ _id: -1 }).exec();
  }
  // 保存文章
  async create(post) {
    this.ctx.model.User.create(post);
  }
  // 获取指定文章
  async findById(id) {
    return this.ctx.model.User.findById(id).exec();
  }
  // 获取指定文章
  async findAndUpdate(id, post) {
    this.ctx.model.User.findOneAndUpdate({ _id: id }, post).exec();
  }
  async findAndRemove(id) {
    return this.ctx.model.User.remove({
      _id: id,
    });
  }
}

module.exports = UserService;
