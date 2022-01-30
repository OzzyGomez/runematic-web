import React from 'react';
import classes from './Home.module.css';

const Home = () => {
  return (
		<div className="root">
			<div className="content">
				<div className={classes['video-background']}>
					<div className={classes['video-foreground']}>
						<iframe 
							width="560"
							 height="315" 
							 src="https://www.youtube.com/embed/kmSD990jyII?controls=0&rel=0&autoplay=1&loop=1&mute=1&showinfo=0&playlist=kmSD990jyII" 
							 title="video" 
							 frameBorder="0" 
							 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							 allowFullScreen 
							/>
					</div>
				</div>
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