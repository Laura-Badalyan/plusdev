import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px 19px;
`;

export const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
