'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async home() {
    const dataList = await this.service.user.findAll();
    await this.ctx.render('index.tpl', { dataList });
  }
  async del() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    const rs = await service.user.findAndRemove(id);
    if (rs) {
      ctx.body = {
        code: 0,
        msg: '删除成功',
      };
    }
  }
  async index() {
    this.ctx.model.User.create({
      title: 'title',
      content: 'content',
    });
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
