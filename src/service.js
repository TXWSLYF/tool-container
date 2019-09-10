import Api from './Api';
// TODO: 如何做到区分开发和生产环境
const api = new Api('development');

export const loadTool = toolKey => api.get(`/tool/${toolKey}`);
