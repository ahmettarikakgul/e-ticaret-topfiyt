import { Button, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../../store/actions';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

// Selectorlar
const selectCart = (state) => state.cart.cart;
const selectTotalPrice = (state) => state.cart.totalPrice;
const selectFavorites = (state) => state.favorites || []; // Favori ürünleri seç

const CartItems = () => {
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} justify="center">
        {cart.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <CartItem
              {...item}
              isFavorite={favorites.includes(item.id)} // Favori durumunu geçir
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography
          variant="h4"
          component="p"
          className={classes.total}
          align="center"
          title={totalPrice}
        >
          Toplam: <strong>{totalPrice}&nbsp;₺</strong>
        </Typography>
        <Grid
          container
          justify="center" // Sadece ortada hizala
          align="center"
          className={classes.btnContainer}
        >
          <Button
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => dispatch(allActions.cartActions.clearCart())}
            startIcon={<DeleteIcon />}
            aria-label="Clear the cart"
          >
            Sepeti Temizle
          </Button>
        </Grid>
      </div>
    </>
  );
};

export default CartItems;