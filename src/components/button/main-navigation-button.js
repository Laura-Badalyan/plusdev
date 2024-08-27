import { Button } from 'antd';
import styled from 'styled-components';

const NavigationButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  && {
    padding: 40px 85px;
    height: 160px;

    span {
      margin: 0;
    }
  }
`;

export const MainNavigationButton = (props) => {
  return <NavigationButton size="large" type="primary" {...props} />;
};
