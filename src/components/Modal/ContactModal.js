import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../Contact/Contact';

import {styles} from './ContactModal.style';
import {withStyles} from '@material-ui/core';

const ContactModal = ({ handleClose, show, classes }) => {
  
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

  ContactModal.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired

  };

export default withStyles(styles)(ContactModal);