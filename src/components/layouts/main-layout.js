import { Layout } from 'antd';
import { DefaultSider } from './default-sider';
import { DefaultHeader } from './default-header';
import { DefaultContent } from './default-content';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ sider, header, content, footer }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {header || <DefaultHeader />}
      <Layout>
        {sider || <DefaultSider />}

        {content || (
          <DefaultContent>
            <Outlet />
          </DefaultContent>
        )}
        {footer}
      </Layout>
    </Layout>
  );
};
