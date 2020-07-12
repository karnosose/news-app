import React from 'react';

import {styles} from './Contact.style';
import {withStyles} from '@material-ui/core';

class Contact extends React.Component{
  handleClose = e => {
    e.preventDefault();
    this.props.handleClose();
  }

  handleSubmit = e => {
    e.preventDefault();
  }
  render(){
    const {classes} = this.props;

    return (
        <form className={classes.contactForm}>
          <div className={classes.name}>
            <input type='text' placeholder="name"></input>
          </div>
          <div className={classes.email}>
            <input type='email' placeholder='email'></input>
          </div>
          <div className={classes.message}>
            <textarea placeholder="type your message"></textarea>
          </div>
          <div className={classes.modalButtons}>
            <button className={classes.close} type='button' onClick={e => this.handleClose(e)}>Close</button>
            <button className={classes.send} type='button' onClick={e => this.handleSubmit(e)}>Send</button>
          </div>
        </form>
        
    )
  }
}

export default withStyles(styles)(Contact)