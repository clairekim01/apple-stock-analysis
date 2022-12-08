import React from 'react';
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh',
        paddingLeft: 20
      }}
    >
      <html>
        <header>
          <h4>Apple stock analysis for CMSC 436/636 at University of Maryland, Baltimore County.</h4>
          <h4>Collaborators: Claire Kim, Yara Younis, and Megha Singh</h4>
        </header>
        <body>
        <p>This project is focused on analyzing changes in Apple stock prices over time specifically current events such as the pandemic and Steve Jobs' death. The dataset was acquired from Kaggle. Google Charts API was used to create the visualizations and the website was created using React. All project code was in Javascript, HTML, and CSS.</p>
        </body>
      </html>
    </div>
  );
};
  
export default About;