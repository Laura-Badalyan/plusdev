import { Typography } from 'antd';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, screenSize } from '../../helpers/constants';

const { Text: TextComponent } = Typography;

export const textSizeMedia = css`
  @media (max-width: ${screenSize.xxl}) {
    font-size: 15px;
    line-height: 1.3;
  }
`;

export const textStyles = css`
  font-weight: 400;
  ${textSizeMedia}
`;

// eslint-disable-next-line no-unused-vars
export const Text = styled(forwardRef(({ color, ...props }, ref) => <TextComponent {...props} ref={ref} />))`
  && {
    ${textStyles}
    color: ${(props) => props.color || COLORS.PRIMARY.GRAY_DARK};
  }
`;

// eslint-disable-next-line no-unused-vars
export const SmallText = styled(({ color, ...props }) => <Text {...props} />)`
  && {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.color || '#091024'};
  }
`;

// eslint-disable-next-line no-unused-vars
export const SecondaryText = styled(({ color, ...props }) => <Text type="secondary" {...props} />)`
  && {
    font-size: 16px;
    line-height: 16px;
    color: ${(props) => props.color || '#456FAE'};
  }
`;
