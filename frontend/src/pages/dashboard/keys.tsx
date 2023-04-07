import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const APIKeysDashboardPage = () => {
	return (
		<Main meta={<Meta title="API Keys" description={'View your API keys for our service.'} />}>
			<div>
				<h1>API Keys</h1>
				<h2>Manage your API Keys</h2>
			</div>
		</Main>
	);
};

export default APIKeysDashboardPage;
