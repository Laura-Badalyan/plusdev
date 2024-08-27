import { Space } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  background-color: #456fae;
  padding: 0 74px;
  margin-top: auto;
  margin-bottom: auto;

  .sub-text {
    color: #ffffff;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    text-transform: uppercase;
  }
`;

export const SubHeader = ({ icon, text }) => {
  return (
    <Wrapper>
      <Space>
        {icon}
        <span className="sub-text">{text}</span>
      </Space>
    </Wrapper>
  );
};
