import { LongTextPopover } from '../popover';
import { VARIABLES } from '../../helpers/constants';
import { Text } from './text';


export const LongTitle = ({ name, cutPosition = VARIABLES.MAX_PROJECT_TITLE_LENGTH, className }) => (
  <LongTextPopover title={<Text>{name}</Text>} align={{ offset: [15, 22] }}>
    <Text className={className}>{name.substring(0, cutPosition) + '...'}</Text>
  </LongTextPopover>
);
