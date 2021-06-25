import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../Images/logo2.png.png';
import { links } from '../data';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './NavBar.css';

const useStyles = makeStyles({
    root: {
        height: '10vh',
        backgroundColor: '#444',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        marginLeft: '1rem',
        width: '40%',
    },
    container: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    names: {
        color: 'white',
        padding: '1.8rem 1.4rem',
        transition: 'all 0.2s ease-in',
        '&:hover': {
            backgroundColor: '#333',
        },
    },
    navLinks: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        cursor: 'pointer',
    },
    social: {
        width: '20%',
        display: 'flex',
        justifyContent: 'space-around',
        cursor: 'pointer',
    },
    socialIcon: {
        color: 'white',
        padding: '0.3rem',
        borderRadius: '50%',
        transition: 'all 0.2s ease-in',
        '&:hover': {
            backgroundColor: '#888',
            color: '#333',
            transform: 'scale(1.1)',
        },
    },

    close: {
        position: 'relative',
        left: '10rem',
        color: 'white',
        top: '1.5rem',
        cursor: 'pointer',
    },

    '@media (max-width: 1111px)': {
        socialIcon: {
            display: 'none',
        },
    },
    '@media (max-width: 768px)': {
        socialIcon: {
            display: 'none',
        },
        navLinks: {
            display: 'none',
        },
    },
});

function NavBar() {
    const classes = useStyles();
    const [isActive, setisActive] = useState(false);

    const handleActive = (status) => {
        setisActive(status);
    };

    return (
        <nav className={classes.root}>
            <div className={classes.logo}>
                <img height='150px' width='auto' src={logo} alt='logo' />
            </div>

            <div className={classes.container}>
                <div className={classes.navLinks}>
                    {links.map((cur) => (
                        <span className={classes.names}>{cur.name}</span>
                    ))}
                </div>

                <div className={classes.social}>
                    <span className={classes.socialIcon}>
                        <FacebookIcon />
                    </span>
                    <span className={classes.socialIcon}>
                        <LinkedInIcon />
                    </span>
                    <span className={classes.socialIcon}>
                        <TwitterIcon />
                    </span>
                </div>

                <div className='nav-links-small'>
                    <MenuIcon
                        style={{
                            color: 'white',
                            position: 'fixed',
                            top: '25px',
                            right: '20px',

                            cursor: 'pointer',
                        }}
                        fontSize='large'
                        onClick={() => handleActive(true)}
                    />
                    <div className={`side-bar ${isActive && 'active'}`}>
                        <CloseIcon
                            className={classes.close}
                            fontSize='large'
                            onClick={() => handleActive(false)}
                        />
                        <div>
                            {links.map((cur) => (
                                <div
                                    className={`sidebarItem ${
                                        isActive && 'active'
                                    }`}>
                                    <span>{cur.icon}</span>
                                    <span>{cur.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

// className={`side-bar ${isActive && 'active'}`}
