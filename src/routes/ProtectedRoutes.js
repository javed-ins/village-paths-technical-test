import { Suspense } from 'react';
import { Layout } from 'antd';
import {Route, Switch} from 'react-router-dom';
import routes from './routes';
import Header from 'shared/Header';

const { Content } = Layout;

function ProtectedRoutes() {

  return (
    <Layout>
      <Layout>
        {/*<Sider/>*/}
        <Layout>
          <Header/>
          <Content>
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {routes.map(({component: Component, path, exact}, index) => (
                  <Route path={`/${path}`} key={index} exact={exact}>
                    <Component/>
                  </Route>
                ))}
              </Suspense>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ProtectedRoutes;
