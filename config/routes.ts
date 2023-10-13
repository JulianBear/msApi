export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  { icon: 'table', path: '/list', component: './TableList', name: '接口名称' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
