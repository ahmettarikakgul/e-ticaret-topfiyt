import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { HomeOutlined, ShoppingBasketOutlined } from '@material-ui/icons'; // Yeni ikonlar
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSelector } from 'react-redux';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { CustomTooltip, Search } from '../../components';
import useStyles from './styles';

const selectAmount = (state) => state.cart.amount;

const Navbar = () => {
  const amount = useSelector(selectAmount);
  const { pathname } = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <AppBar position="sticky" className={classes.appBar} color="primary">
      <Toolbar className={classes.toolbar}>
        <CustomTooltip title="Anasayfa'ya Git">
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <HomeOutlined style={{ color: '#black' }} /> {/* Canlı turuncu ikon */}
            Konsept Tema
          </Typography>
        </CustomTooltip>
        {pathname === '/' ? (
          <Search />
        ) : (
          <Button
            onClick={handleClick}
            type="button"
            variant="contained"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            aria-label="Go back"
            title="Go back"
            size="medium"
          >
            Geri Dön
          </Button>
        )}
        <div className={classes.button}>
          <CustomTooltip title="Sepeti göster">
            <IconButton
              component={NavLink}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
              activeStyle={{
                background: 'rgba(255, 87, 34, 0.2)', // Canlı turuncu arka plan rengi
              }}
            >
              <Badge badgeContent={amount} color="secondary" showZero>
                <ShoppingBasketOutlined style={{ color: '#black' }} /> {/* Canlı turuncu ikon */}
              </Badge>
            </IconButton>
          </CustomTooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
