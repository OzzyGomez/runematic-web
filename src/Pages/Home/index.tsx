import React from 'react';

const Home = () => {
  return (
		<div className="root">
			<div className="content">
				<video autoPlay muted loop className="video">
					<source src="https://firebasestorage.googleapis.com/v0/b/runematic-e964d.appspot.com/o/public%2FRunematic.mp4?alt=media&token=089c7278-9761-418b-8385-75936315e410" type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
				<div className="content">
					<div className="titlebox">
						<h1 className="title">RUNEMATIC</h1>
						<p className="subtitle">A Story Based Running App</p>
					</div>
				</div>
			</div>
		</div>
  )
};

export default Home;