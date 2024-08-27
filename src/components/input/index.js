import { Input as InputComponent } from 'antd';
import { changeHeight, placeholderSize } from '../../helpers/styles';
import styled, { css } from 'styled-components';

export const Input = styled(InputComponent)`
  ${(props) =>
    !props.size
      ? css`
          /* ${changeHeight} */
        `
      : ''}

  ::placeholder {
    ${placeholderSize}
  }
`;

export const FormInput = (props) => {
  return <Input {...props} />;
};

export { TextArea } from './text-area';
