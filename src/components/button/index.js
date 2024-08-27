import { Button as ButtonComponent } from 'antd';
import { textSizeMedia } from '../typography/text';
import styled from 'styled-components';

export const Button = styled(ButtonComponent)`
  ${textSizeMedia}
  &.ant-btn-default {
  }

  &.ant-btn-default:disabled {
  }

  &.ant-btn-default:not(:disabled) {
  }
`;

export { MainNavigationButton } from './main-navigation-button';
