import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
    return (<header className={classes.header}>
        <h2 className={classes.logo}>React Meetups</h2>
        <ul>
            <li><Link to='/'>All Meetups</Link></li>
            <li><Link to='/new-meetups'>Add Meetups</Link></li>
            <li><Link to='/favorites'>My Favorites</Link></li>
        </ul>
    </header>
    )
}