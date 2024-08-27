import { Form as FormComponent } from 'antd';
import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const Form = styled(FormComponent)`
  &&.ant-form {
    .ant-form-item-required {
      &:before {
        content: '' !important;
      }

      &:after {
        display: inline-block;
        margin-left: 4px;
        color: ${COLORS.ALERT.RED};
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: '*';
      }
    }
  }
`;
