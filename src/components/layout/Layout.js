import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <div className={classes.main}>{props.children}</div>
        </div>
    )
}