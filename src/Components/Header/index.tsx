import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.root}>
      <Link to="/" className={classes.title}>Runematic</Link>
    </header>
  )
}

export default Header;