import assert from 'assert';
import cache from 'memory-cache';
import { readFileSync } from 'node:fs';
import {
  createSpace,
  uploadFile,
} from '../index.mjs';

const {
  CORP_ID,
  SECRET,
} = process.env;

const options = {
  corpId: CORP_ID,
  secret: SECRET,
};

describe('wecom-wedrive 测试', function() {
  after(() => cache.clear());
  this.timeout(100000);
  // describe('空间管理', () => {
  //   it('新建空间 createSpace', async () => {
  //     const spaceInfo = {
  //       space_name: '测试空间',
  //       auth_info: [{
  //         type: 1,
  //         userid: 'na57',
  //         auth: 7,
  //       }],
  //     };
  //     const res = await createSpace(spaceInfo, options);
  //     console.log(res);
  //   });
  // });
  describe('管理文件', () => {
    it('上传文件 uploadFile', async () => {
      const data = readFileSync('/Users/na57/run.sh');
      // console.log(data.toString('base64'));
      const res = await uploadFile('run.sh', data.toString('base64'), {
        spaceid: 's.wx75bf77356dbce5f7.6710224535uW',
        fatherid: 's.wx75bf77356dbce5f7.6710224535uW',
      });
      console.log(res);
    });
  });

  
});