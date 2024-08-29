import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    width: '350px',
    margin: theme.spacing(0, 1.75),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff', // Beyaz arka plan rengi
    border: `1px solid ${theme.palette.grey[300]}`, // Hafif gri kenarlık
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`, // Hafif gölge
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    transition: 'all 0.3s ease', // Geçiş efekti
    '&:hover': {
      borderColor: theme.palette.primary.main, // Hover durumunda ana renk kenarlık
    },
  },
  indicator: {
    color: '#ffffff', // Beyaz renk
  },
}));
