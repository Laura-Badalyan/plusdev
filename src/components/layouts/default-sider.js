import { useMatches } from 'react-router-dom';
import { MainSider } from '../menu/main-sider';
import { UserNavbar } from '../menu/user-navbar';
import { SidebarProfile } from '../profile/sidebar-profile';
import { ApplicationViewSteps } from 'components/application-view/application-view-steps';
import { ACTIONS } from 'helpers/constants';

export const DefaultSider = () => {
  const actionType = [...useMatches()].slice(-1)[0].handle;

  return (
    <MainSider
      style={{ backgroundColor: 'rgba(219, 233, 253, 0.8)', padding: '130px 12px' }}
      width={369}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <SidebarProfile />
      <UserNavbar />
      {actionType === ACTIONS.VIEW && <ApplicationViewSteps />}
    </MainSider>
  );
};
