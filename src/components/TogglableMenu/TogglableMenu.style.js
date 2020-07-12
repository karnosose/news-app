export const styles = {
  contactUs: {
    color:'#25d7ff',
    cursor: 'pointer',
    textDecoration: 'none',
    '@media (max-width: 1024px)': {
      margin: '5px 0 10px'
    },
  },
  toggleMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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