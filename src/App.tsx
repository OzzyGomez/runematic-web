import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
		<Fragment>
	    <video autoPlay muted loop className="video">
	      <source src="Assets/runematic_background_short.mp4" type="video/mp4" />
	      Your browser does not support HTML5 video.
			</video>

	    <div className="content">
				<div className="titlebox">
	      	<h1 className="title">RUNEMATIC</h1>
	      	<p className="subtitle">A Story Based Running App</p>
					<p className="description">
						Run to different stories that put you in the middle of the action
						and get you motivated!
					</p>
					<div className="coming-soon">Coming Soon</div>
				</div>
	    </div>
    </Fragment>
  );
}

export default App;
