export const styles = {
    contactUs: {
        color:'#25d7ff',
    
        textDecoration: 'none'
      },
      toggleMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '76%',
        '@media (max-width: 1024px)': {
        //   display: 'none'
        }
      },
      menuIcon: {
        color: 'white',
        // display: 'none',
        cursor: 'pointer',
        '@media (max-width: 1024px)': {
        //   display: 'unset',
          marginRight:40
        }
      },
      categories: {
        display: 'flex',
        minWidth: 500,
        margin:0
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
}