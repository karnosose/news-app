export const styles = {
    articleList: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '80px auto'
    },
    article: {
        border: '1px solid #e1e0e0',
        borderRadius: 10,
        display: 'flex',
        flexDirection:'row',
        padding: 20,
        margin: '20px 0',
        alignItems: 'center',


    },
    image: {
        '& img': {
            width:350

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
        marginTop:15
    }
}

