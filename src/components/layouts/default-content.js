import { Layout } from 'antd';
import styled from 'styled-components';

import { ManagePage } from './manage-page';

const { Content } = Layout;

const Wrapper = styled(Content)`
  padding: 32px;
`;

export const DefaultContent = ({ children }) => (
  <Wrapper>
    <ManagePage />
    {children}
  </Wrapper>
);

