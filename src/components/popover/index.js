import { Popover } from 'antd';

import './index.css';


export const LongTextPopover = (props) => (
  <Popover placement="top" mouseEnterDelay={0.4} overlayClassName="long-text" {...props} />
);
