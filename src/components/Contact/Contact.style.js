export const styles = {
  contactForm: {
    display: 'flex',
    flexDirection:'column',
    margin:10,
    width: '90%'
  },
  name: {
    '& input': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      margin:5,
      width: '90%'
    } 
  },
  email: {
    '& input': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      margin:5,
      width: '90%'
    }
  },
  message: {
    '& textarea': {
      border: '1px solid #ced4da',
      outline:'none',
      borderRadius:10,
      padding:10,
      margin:5,
      width: '90%'
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

  }
}