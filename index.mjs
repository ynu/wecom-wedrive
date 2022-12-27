/**
 * 企业微信API-文档
 */
import axios from 'axios';
import { getToken, qyHost, WecomError } from 'wecom-common';
import Debug from 'debug';
const warn = Debug('wecom-wedrive:warn');
const error = Debug('wecom-wedrive:error');
const info = Debug('wecom-wedrive:info');
const debug = Debug('wecom-wedrive:debug');

export const createSpace = async (spaceInfo, options = {}) => {
  console.log(options);
  const token = await getToken(options);
  const res = await axios.post(`${qyHost}/wedrive/space_create?access_token=${token}`, spaceInfo);
  if (res.data?.errcode) throw new WecomError(res.data.errcode, res.data.errmsg);
  return res.data.spaceid;
}

export const addFileAcl = async (acl, options = {}) => {
  const token = await getToken(options);
  const res = await axios.post(`${qyHost}/wedrive/file_acl_add?access_token=${token}`, acl);
  if (res.data?.errcode) throw new WecomError(res.data.errcode, res.data.errmsg);
  return true;
}

export const shareFile = async (fileid, options = {}) => {
  const token = await getToken(options);
  const res = await axios.post(`${qyHost}/wedrive/file_acl_add?access_token=${token}`, acl);
  if (res.data?.errcode) throw new WecomError(res.data.errcode, res.data.errmsg);
  return res.data.share_url;
}

export const uploadFile = async (file_name, file_base64_content, params = {}, options = {}) => {
  const token = await getToken(options);
  const res = await axios.post(`${qyHost}/wedrive/file_upload?access_token=${token}`, {
    ...params,
    file_name,
    file_base64_content,
  });
  if (res.data?.errcode) throw new WecomError(res.data.errcode, res.data.errmsg);
  return res.data.fileid;
}

export default {
  createSpace,
  addFileAcl,
  shareFile,
  uploadFile,
}