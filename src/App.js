import React from 'react';
// renderRouters读取路由配置转换为router标签
import { renderRoutes } from 'react-router-config';
import routes from './routers/index.js';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
