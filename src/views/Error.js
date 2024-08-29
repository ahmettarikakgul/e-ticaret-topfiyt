import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '93vh',
    backgroundColor: theme.palette.grey[200], // Arka plan rengini değiştirdik
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5], // Gölgeyi belirginleştirdik
    backgroundColor: '#ffffff',
    animation: `$fadeIn 1.2s ${theme.transitions.easing.easeInOut}`, // Animasyon ekledik
    [theme.breakpoints.only('xs')]: {
      width: '90vw',
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Error = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <Grid
      container
      component="section"
      className={classes.container}
    >
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" component="p" color="textSecondary" gutterBottom>
          Oops! Sayfa Bulunamadı !
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Aradığınız sayfa mevcut değil veya taşınmış.
        </Typography>
        <Button
          onClick={handleClick}
          size="large"
          type="button"
          variant="contained"
          className={classes.button}
          startIcon={<ArrowBack />}
          aria-label="Go back"
        >
          Geri Dön
        </Button>
      </Paper>
    </Grid>
  );
};

export default Error;
