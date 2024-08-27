import { Typography } from 'antd';
import styled, { css } from 'styled-components';

const { Title: TitleComponent } = Typography;

// eslint-disable-next-line no-unused-vars
export const Title = styled(({ color, ...props }) => <TitleComponent {...props} />)`
  && {
    color: ${(props) => props.color || '#456FAE'};
    margin: 0px;

    ${(props) =>
      props.level === 1
        ? css`
            font-weight: 700;
          `
        : ''}

    ${(props) =>
      props.level === 2
        ? css`
            font-weight: 600;
          `
        : ''}
  }
`;

export { SmallText, Text, SecondaryText, textStyles } from './text';
export { TitleSeparator } from './title-separator';
export { LongTitle } from './long-title';
