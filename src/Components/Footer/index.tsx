import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.root}>
			<Link to="/terms-of-use">Terms of Use</Link>
			<Link to="/privacy">Privacy Policy</Link>
			<Link to="/contact">Contact</Link>
		</footer>
  );
}

export default Footer;