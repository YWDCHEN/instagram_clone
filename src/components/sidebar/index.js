import useUser from '../../hooks/use-user';
import {memo} from 'react';
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
  const {
    user: {fullname, username, userId},
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default memo(Sidebar);

Sidebar.whyDidYouRender = true;
