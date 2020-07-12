export const styles = {
    showModal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width:'100%',
        height:' 100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'block',
      },
      hideModal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width:'100%',
        height:' 100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'none',
      },
      
      mainModal: {
        position:'fixed',
        background: 'white',
        height: 'auto',
        top:'50%',
        left:'50%',
        width:500,
        transform: 'translate(-50%,-50%)',
        border: '1px solid rgba(0,0,0,.2)',
        borderRadius:10
      },
      modalContent: {
        width: '100%',
        pointerEvents: 'auto',
        background: '#fff',
        backgroundClip: 'padding-box',
        borderRadius: '.3rem',
        outline: 0,
      },
      modalHeader: {
        padding:10
      }
    

}