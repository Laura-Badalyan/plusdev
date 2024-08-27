import { Tabs as TabsComponent } from 'antd';
import styled from 'styled-components';

const items = [
  {
    key: '1',
    label: 'Մուտք',
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: 'Գրանցվել',
    children: `Content of Tab Pane 2`,
  },
];

const TabsStyle = styled(TabsComponent)`
  .ant-tabs-nav-wrap {
    background: #f0f2f5;

    .ant-tabs-tab-active span {
      color: #456fae;
    }
  }
`;

export const LoginTab = (props) => {
  return <TabsStyle defaultActiveKey="1" items={items} {...props} />;
};
