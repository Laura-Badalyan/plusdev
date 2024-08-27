import { Text } from '../typography';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  return <Text onClick={() => navigate('/')}>Logo</Text>;
};
