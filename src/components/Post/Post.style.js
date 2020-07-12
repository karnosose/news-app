export const styles = {
    articleList: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '80px auto',
        '@media (max-width: 1024px)': {
            width:'90%'
        },
        '@media (max-width: 600px)': {
            width: '95%',
        },
    },
    article: {
        border: '1px solid #e1e0e0',
        borderRadius: 10,
        display: 'flex',
        flexDirection:'row',
        padding: 20,
        margin: '20px 0',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            flexDirection:'column',
            padding: '20px 0',

        },

    },
    image: {
        width:'97%',
        '& img': {
            width:'100%'

        }
    },
    content: {
        padding: '0 20px'
    },
    authorAndDate: {
        display: 'flex',
        flexDirection: 'row'
    },
    excerpt: {
        marginTop:10
    },
    readMore:{
        display:'flex',
        marginTop:15,
        '& a': {
            color: '#25d7ff',
            textDecoration: 'none',
            '&:hover': {
                color: '#0cb3d9',
            }
        }
    
    }
}

