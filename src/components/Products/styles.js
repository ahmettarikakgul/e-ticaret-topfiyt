import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f3f3',
    padding: theme.spacing(2, 3), // Genişletilmiş padding
    display: 'flex',
    justifyContent: 'center', // Ortalanmış içerik
    alignItems: 'flex-start', // Üst hizalama
    flexDirection: 'column',
    minHeight: '92vh',
    width: '100%',
    gap: theme.spacing(2), // Daha geniş boşluk
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 6), // Orta ekranlar için padding
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3], // Hafif gölge
  },
  sortWrapper: {
    marginTop: theme.spacing(2), // Artırılmış üst boşluk
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
  },
  showMoreButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));
