export const styles = {
  header: {
    display:'flex',
    flexDirection:'row',
    background: '#172426',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:70,
    '@media (max-width: 1024px)': {
      // alignItems: 'flex-start'
    }
  },
  togglable: {
    background: '#172426',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'100%',
    '@media (max-width: 1024px)': {
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  appTitle: {
    marginLeft: 60,

    '@media (max-width: 1024px)': {
      marginLeft: 40
    },
    '& a': {
    textDecoration: 'none',

    },
    '& h2': {
      color:'#25d7ff',
    }
  },
  menuIcon: {
    color: 'white',
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      marginRight:40
    }
  }

}
    