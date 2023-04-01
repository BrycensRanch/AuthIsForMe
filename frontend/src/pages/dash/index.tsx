import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const RootDashboard = () => {
  return (
        		<Main meta={<Meta title="Dashboard" description={'Dashboard'} />}>

		<div>
			<h1>Dashboard</h1>
			<h2>Welcome User</h2>
      </div>
      </Main>
	);
};

export default RootDashboard;
