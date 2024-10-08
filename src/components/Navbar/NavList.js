import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormatListBulleted, Home, Info } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const linkBorder = '3px solid #e3d498'; // Aktif menü öğesi için alt sınır rengi

// Menü öğeleri için sabit veri
const listItems = [
  {
    id: 0,
    path: '/',
    icon: <Home />,
    name: 'Home',
  },
  {
    id: 1,
    path: '/products',
    icon: <FormatListBulleted />,
    name: 'Products',
  },
  {
    id: 2,
    path: '/about',
    icon: <Info />,
    name: 'About us',
  },
];

// Stil tanımları
const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      display: 'none', // Mobil ekranlarda menüyü gizle
    },
  },
  root: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 1),
  },
  rootIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
  },
}));

const NavList = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-label="main navigation"
      className={classes.listContainer}
    >
      {listItems.map(({ id, path, icon, name }) => (
        <ListItem
          key={id}
          button
          component={NavLink}
          exact
          to={path}
          activeStyle={{
            borderBottom: linkBorder,
          }}
          className={classes.root}
        >
          <ListItemIcon className={classes.rootIcon}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
