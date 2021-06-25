import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';

export const links = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-home',
    },
    {
        name: 'About',
        path: '/about',
        icon: <InfoIcon />,
        cName: 'nav-about',
    },
    {
        name: 'Products',
        path: '/products',
        icon: <ShoppingCartIcon />,
        cName: 'nav-products',
    },
    {
        name: 'Team',
        path: '/team',
        icon: <PeopleIcon />,
        cName: 'nav-team',
    },
    {
        name: 'Support',
        path: '/support',
        icon: <HelpIcon />,
        cName: 'nav-support',
    },
];
