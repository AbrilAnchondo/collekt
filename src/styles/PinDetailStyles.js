const styles = {
  root: {
    display: 'flex',
    marginTop: '30px',
    marginLeft: '30px'
  },
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    height: '80vh',
    width: '70%',
    backgroundColor: '#efefef',
    justiflyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '30px',
    boxShadow: '5px 10px 18px #888888'
  },
  detailContainer: {
    color: 'balck',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '20px',
    marginTop: '60px'
  },
  detail : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '20px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px'
  },
  link: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '25px',
    padding: '15px',
    textDecoration: 'none',
    margin: '15px 0'
  },
}
export default styles;