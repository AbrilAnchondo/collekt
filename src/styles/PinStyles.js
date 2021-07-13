const SHOW_SAVE_BUTTON = true;
const styles = {
  root: {
    //display: 'flex',
    padding: '8px'
  },
  pinContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '236px',
    boxSizing: 'border-box',
    position: 'relative',
    '&:hover div': {
      opacity: SHOW_SAVE_BUTTON ? '1' : '0',
    }
  },
  image: {
    display: 'flex',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    cursor: 'zoom-in',
    '&:hover': {
      opacity: '0.6'
    }
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#e60023',
    color: 'white',
    padding: '.9rem 1rem',
    fontSize: '1rem',
    borderRadius: '48px',
    fontWeight: 'bolder',
  },
  download: {
    position: 'absolute',
    bottom: '8px',
    left: '14px',
    cursor: 'pointer',
    opacity: '0',
  },
  save: {
    position: 'absolute',
    top: '14px',
    right: '8px',
    cursor: 'pointer',
    opacity: '0',
  }
}
export default styles;