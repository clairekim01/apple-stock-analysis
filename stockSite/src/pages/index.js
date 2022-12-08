import React from 'react';

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '100vh'
	}}
	>
	<body>
	<header>
		<h4>Visualizations</h4>
	</header>
	<p>Open stock price: first price a stock trades at when the market opens</p>
	<p>High stock price: more people want to buy a stock than sell it, supply is lower than demand</p>
	<p>Low stock price: more people want to sell a stock than buy it, supply is greater than demand</p>
	<p>Close stock price: last price a stock trades at when the market closes</p>
	</body>
	</div>
);
};

export default Home;
