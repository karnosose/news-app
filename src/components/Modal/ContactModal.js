import React from 'react';

import Contact from '../Contact/Contact';
import {styles} from './ContactModal.style';
import {withStyles} from '@material-ui/core';

const ContactModal = ({ handleClose, show, children, classes }) => {
  
    return (
      <div className={show ? classes.showModal : classes.hideModal}>
        <section className={classes.mainModal}>
          <div className={classes.modalContent}>
            <div className={classes.modalHeader}>
                Send your message
            </div>
            <div className={classes.modalBody}>
              <Contact handleClose={handleClose}/>
            </div>
          </div>
         
        </section>
      </div>
    );
  };

export default withStyles(styles)(ContactModal);