import { Layout } from 'antd';
import styled from 'styled-components';
import { PageTitle } from '../typography/title';
import { GerbSection } from './gerb-logo';
import { SsaSection } from './ssa-logo';

const { Header: HeaderComponent } = Layout;

const HeaderStyle = styled(HeaderComponent)`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 110px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 74px;
  width: 100%;

`;

export const Header = () => {
  return (
    <HeaderStyle>
      <GerbSection />
      <PageTitle />
      <SsaSection />
    </HeaderStyle>
  );
};
