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
      opacity: 1
    },
    '&:hover p': {
      opacity: '1'
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
    color: 'black',
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
    border: '1px solid blue',
    opacity: '0',
  }
}
export default styles;