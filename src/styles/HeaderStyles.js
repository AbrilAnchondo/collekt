//import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  '@global': {
    '.MuiSvgIcon-root': {
      fontSize: '28px',
    },
    '.MuiIconButton-root': {
      padding: '0 10px'
    }
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'white',
    height: '74px',
    padding: '0 24px',
    cursor: 'pointer'
  },
  pinterest: {
    color: '#e60023'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    padding: '.9rem 1rem',
    fontSize: '1rem',
    borderRadius: '48px',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
  userLink: {
    color: 'grey',
    '&:hover': {
      color: 'black'
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
    backgroundColor: '#efefef',
    padding: '.5rem 1rem',
    flex: 1,
  },
  searchIcon: {
    color: '#6F6F6F',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%'
  }
})
export default styles;