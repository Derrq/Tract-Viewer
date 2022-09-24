import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) =>({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px',
  },
  button: {
    marginTop: '40px'
  }
}));

export default useStyles;