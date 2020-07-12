export const styles = {
  contactUs: {
    textDecoration: 'none',
    '@media (max-,width: 1024px)': {
      margin: '5px 0 10px'
    },
  },
  contactButton: {
    border:'none',
    background: 'none',
    color:'#25d7ff',
    cursor: 'pointer',
  },
  toggleMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    width: '76%',
    '& li':{
      '& a': {
        '&:hover': {
            color:'#25d7ff',
        },
      }
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      marginLeft:40
    }
  },

  categories: {
    display: 'flex',
    minWidth: 500,
    margin:0,
    listStyleType: 'none',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      padding:0,
      '& li':{
        margin:'5px 0',
        '& a': {
          margin: 0,
        },
      },
    }
  },
  category: {
    margin: '0 20px',
    color:'white',
    textDecoration: 'none'
  },
  searchInput: {
    transition: 'width 0.4s ease-in-out',
    "& input":{
      border: 'none',
      height:28,
      outline:'none',
      paddingLeft: 10
    },
    '@media (max-width: 1024px)': {
      margin: '5px 0'
    }
  }
}