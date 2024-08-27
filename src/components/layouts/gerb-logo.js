import { ReactComponent as Gerb } from '../../icons/gerb.svg';
import styled from 'styled-components';

const MlsaLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  gap: 10px;

  span {
    font-weight: 700;
    font-size: 8px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const GerbSection = () => {
  return (
    <MlsaLogo>
      <Gerb style={{ width: '40px' }} />
      <span>ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԱՇԽԱՏԱՆՔԻ ԵՎ ՍՈՑԻԱԼԱԿԱՆ ՀԱՐՑԵՐԻ ՆԱԽԱՐԱՐՈՒԹՅՈՒՆ</span>
    </MlsaLogo>
  );
};
