import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
	const loggedIn = {
		firstName: 'Valon',
		lastName: 'Mulolli',
		email: 'valonmulolli@gmail.com',
	};
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome, '
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account and transactions efficently'
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.23}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 1250 }, { currentBalance: 1250 }]}
			/>
		</section>
	);
};

export default Home;
