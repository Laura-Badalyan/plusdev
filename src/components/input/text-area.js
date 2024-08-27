import { Input as InputComponent } from 'antd';
import styled from 'styled-components';

const { TextArea: TextAreaComponent } = InputComponent;

const TextAreaStyled = styled(TextAreaComponent)`
  background: linear-gradient(91.78deg, rgba(255, 255, 255, 0.64) 6.81%, rgba(255, 255, 255, 0.16) 100%);
  border: 1px solid #808080;
  border-radius: 4px;
  overflow: hidden;
  height: max-content; 
  min-height: 40px;
  max-height: 140px;
  box-sizing: border-box;
`;

export const TextArea = (props) => {
  return <TextAreaStyled {...props} />;
};
