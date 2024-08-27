import { Checkbox as CheckboxComponent } from 'antd';
import styled from 'styled-components';

export const Checkbox = styled(CheckboxComponent)`
  && {
    .ant-checkbox-checked {
      &:hover {
        .ant-checkbox-inner {
          border-color: #456fae;
        }
      }
    }

    &&:hover {
      .ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: #456fae;
        }
      }
    }
  }
`;
