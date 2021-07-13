const styles = {
  wrapper: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    //height: 'calc(100vh - 100px)',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '96%',
    height: '100%',
    backgroundColor: 'whitesmoke',
    paddingTop: '20px',
    borderRadius: '20px',
    overflow: 'auto'
  },
  myMansonryGrid: {
    display: '-webkit-box', 
    display: '-ms-flexbox', 
    display: 'flex',
    marginLeft: '-30px',
    width: 'auto',
  },
  myMansonryGridColumn: {
    paddingLeft: '20px', /* gutter size */
    backgroundClip: 'padding-box',
    '& div': {
      marginBottom: '5px'
    }
  },
}
export default styles;