import React from 'react';

import {styles} from './ContactModal.style';
import {withStyles} from '@material-ui/core';

const ContactModal = ({ handleClose, show, children, classes }) => {
  
    return (
      <div className={show ? classes.showModal : classes.hideModal}>
        <section className={classes.mainModal}>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default withStyles(styles)(ContactModal);