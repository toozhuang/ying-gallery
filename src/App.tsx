import * as React from 'react';
import './App.css';
import LayoutPage from './components/layout';

import { Routes, Route, Link } from 'react-router-dom';
import { Button, Result, Skeleton } from 'antd';

const App = () => {
  return (
    <div className="App">
      {/*<LayoutPage></LayoutPage>*/}
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<div>我是什么</div>} />
          {/*<Route path="/sneakers/:id" element={<SneakerView />} />*/}
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="页面不存在， 你说怎么访问？"
                extra={
                  <Button type="primary">
                    <Link to="/"> 返回主页面</Link>
                  </Button>
                }
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;