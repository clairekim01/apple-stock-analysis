import React from 'react';
import { Helmet } from "react-helmet";
import MyImage1 from '../images/vis1.png';
import MyImage2 from '../images/vis2.png';
import MyImage3 from '../images/vis3.png';
import MyImage4 from '../images/vis4.png';
import MyImage5 from '../images/vis5.png';
import MyImage6 from '../images/vis6.png';
import MyImage7 from '../images/vis7.png';
import MyImage8 from '../images/vis8.png';

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

	<div style={{display:"flex", flexDirection: 'row', flexWrap:"wrap", justifyContent: 'space-between', flexShrink: "0", width: "1180px", height: "1000px"}}> 
		<div class="flourish-embed flourish-scatter" data-src="visualisation/12127894" flexGrow="1" data-width="580px">
			<Helmet>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Helmet>
		</div>

		<div class="flourish-embed flourish-chart" data-src="visualisation/12127890" flexGrow="1" data-width="580px">
			<Helmet>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Helmet>
		</div>
		<div class="flourish-embed flourish-chart" data-src="visualisation/12130563" flexGrow="1" data-width="580px">
			<Helmet>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Helmet>
		</div>
		<img src={MyImage1} alt="vis1" width="580px" height="400px"/>
		<img src={MyImage2} alt="vis2" width="580px" height="400px"/>
		<img src={MyImage3} alt="vis3" width="580px" height="400px"/>
		<img src={MyImage4} alt="vis4" width="580px" height="400px" />
		<img src={MyImage5} alt="vis5" width="580px" height="400px" />
		<img src={MyImage6} alt="vis6" width="580px" height="400px" />
		<img src={MyImage7} alt="vis7" width="580px" height="400px" />
		<img src={MyImage8} alt="vis8" width="580px" height="400px"/>
	</div>

	</body>
	
	</div>
	
);


};

export default Home;
