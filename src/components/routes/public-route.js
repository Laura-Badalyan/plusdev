import { Col, Layout as LayoutComponent, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Layout = styled(LayoutComponent)`
  background: #fdfdfd;
`;

const { Header: HeaderComponent, Content: ContentComponent } = LayoutComponent;

const Wrapper = styled(HeaderComponent)`
  && {
    background: #456fae;
    padding: 0px;
    height: 114px;
    header {
      background: #456fae;
    }
  }
`;

const Content = styled(ContentComponent)`
  padding: 0 50px;
`;

export const PublicRoutes = () => {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Wrapper>
            <Header />
          </Wrapper>
          <Content>
            <Outlet />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};
