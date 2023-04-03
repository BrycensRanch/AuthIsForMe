import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const RootDashboard = () => {
	return (
		<Main meta={<Meta title="Dashboard" description={'Dashboard'} />}>
			<div
				id="preloader"
				className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900"
			>
				<div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
			</div>
		</Main>
	);
};

export default RootDashboard;
