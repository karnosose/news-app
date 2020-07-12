export const styles = {
  header: {
    background: '#172426',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      justifyContent: 'space-between',
    }
  },
  // categories: {
  //   display: 'flex',
  //   minWidth: 500
  // },
  // category: {
  //   margin: '0 20px',
  //   color:'white',
  //   textDecoration: 'none'
  // },
  // searchInput: {
  //   width: '130px',
  //   // -webkitTransition: 'width 0.4s ease-in-out',
  //   transition: 'width 0.4s ease-in-out',
  //   "& input":{
  //     border: 'none',
  //     height:28,
  //     outline:'none',
  //     paddingLeft: 10
      
  //   }
  // },
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
  contactUs: {
    color:'#25d7ff',

    textDecoration: 'none'
  },
  toggleMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '76%',
    '@media (max-width: 1024px)': {
      display: 'none'
    }
  },
  menuIcon: {
    color: 'white',
    display: 'none',
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      display: 'unset',
      marginRight:40
    }
  }

}
    