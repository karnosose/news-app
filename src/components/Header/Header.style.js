export const styles = {
  header: {
    background: '#172426',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  categories: {
    display: 'flex',
    minWidth: 711
  },
  category: {
    margin: '0 20px',
    color:'white',
    textDecoration: 'none'
  },
  searchInput: {
    width: '130px',
    // -webkitTransition: 'width 0.4s ease-in-out',
    transition: 'width 0.4s ease-in-out',
    "& input":{
      border: 'none',
      height:28,
      outline:'none',
      paddingLeft: 10
      
    }
    
  },
  appTitle: {
    '& a': {
    textDecoration: 'none',

    },
    '& h2': {
      color:'#25d7ff',
    }
  },
  contactUs: {
    color:'#25d7ff',

    textDecoration: 'none'
  }

}
    