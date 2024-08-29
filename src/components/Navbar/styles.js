import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Hafif gölge ekleyerek modern görünüm
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Degrade arka plan
    transition: 'all 0.3s ease-in-out', // Geçiş efekti
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 3), // Padding büyütüldü
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2), // Küçük ekranlarda padding azaltıldı
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 700, // Daha kalın bir yazı tipi
    color: '#fff', // Beyaz renk, degrade arka planla uyumlu
    fontSize: '1.6rem', // Başlık boyutu büyütüldü
    '&:hover': {
      color: '#FFD54F', // Hover efekti için sarı renk
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.5rem', // Küçük ekranlarda biraz daha büyük yazı tipi
    },
    transition: 'color 0.2s ease-in-out', // Yazı rengi geçiş efekti
  },
  button: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0, // Küçük ekranlarda daha az boşluk
    },
  },
  icon: {
    color: '#FFEB3B', // İkonlar için sarı renk
  },
}));
