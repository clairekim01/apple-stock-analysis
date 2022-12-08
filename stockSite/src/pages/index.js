import React from 'react';
import MyImage1 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis1.png'
import MyImage2 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis2.png'
import MyImage3 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis3.png'
import MyImage4 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis4.png'
import MyImage5 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis5.png'
import MyImage6 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis6.png'
import MyImage7 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis7.png'
import MyImage8 from '/Users/yarayounis/Downloads/apple-stock-analysis-site-test/stockSite/src/vis8.png'

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
		{/* 👇️ local image */}
		<img src={MyImage1} alt="vis1" width="700" height="600" />
	{/* 👇️ local image */}
	<img src={MyImage2} alt="vis2" width="700" height="600"/>
	{/* 👇️ local image */}
	<img src={MyImage3} alt="vis3" width="700" height="600"/>
	{/* 👇️ local image */}
	<img src={MyImage4} alt="vis4" width="700" height="600" />
	{/* 👇️ local image */}
	<img src={MyImage5} alt="vis5" width="700" height="600" />
	{/* 👇️ local image */}
	<img src={MyImage6} alt="vis6" width="700" height="600" />
	{/* 👇️ local image */}
	<img src={MyImage7} alt="vis7" width="700" height="600" />
	{/* 👇️ local image */}
	<img src={MyImage8} alt="vis8" width="700" height="600"/>
	</body>
	</div>
);
};

export default Home;
