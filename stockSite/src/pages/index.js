import React from 'react';
import { Helmet } from "react-helmet";

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
	<h2>Definitions</h2>
	
	<p><span style={{fontWeight: 'bold'}}>Open stock price: </span> first price a stock trades at when the market opens</p>
	<p><span style={{fontWeight: 'bold'}}>High stock price: </span>  more people want to buy a stock than sell it, supply is lower than demand</p>
	<p><span style={{fontWeight: 'bold'}}>Low stock price: </span> more people want to sell a stock than buy it, supply is greater than demand</p>
	<p><span style={{fontWeight: 'bold'}}>Close stock price: </span>  last price a stock trades at when the market closes</p>
	<h2>Visualizations</h2>

	<div style={{display:"flex", flexDirection: 'row', justifyContent: 'space-between', flexShrink: "0", width: "1200px", height: "1000px"}}> 
		<div class="flourish-embed flourish-scatter" data-src="visualisation/12127894" flexGrow="1" data-width="540px">
			<Helmet>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Helmet>
		</div>

		<div class="flourish-embed flourish-chart" data-src="visualisation/12127890" flexGrow="1" data-width="540px">
			<Helmet>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Helmet>
		</div>
	</div>

	</body>
	
	</div>
	
);


};

export default Home;
