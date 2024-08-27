import { ReactComponent as SSALogo } from '../../icons/ssa-logo.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 117px;
  gap: 6px;

  span {
    font-weight: 700;
    font-size: 8px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const SsaSection = () => {
  return (
    <Wrapper>
      <SSALogo style={{ width: '45px' }} />
      <span>ՄԻԱՍՆԱԿԱՆ ՍՈՑԻԱԼԱԿԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆ</span>
    </Wrapper>
  );
};
