export const styles = {
  contactForm: {
    display: 'flex',
    flexDirection:'column',
    width: '90%',
    margin:'10px auto'
  },
  name: {
    '& input': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      width: '100%'
    } 
  },
  email: {
    '& input': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      width: '100%'
    }
  },
  message: {
    '& textarea': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      width: '100%'
    }
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'flex-end',
    '& button': {
      borderRadius: 5,
      margin:10,
      padding:'5px 10px'
    }
  },
  close: {
   border:'none',
    width:70

  },
  send:{
    width:110,
    border: 'none'
  },
  errors: {
    color: 'red',
    padding:10
  }
}