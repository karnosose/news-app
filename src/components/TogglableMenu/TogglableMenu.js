import React, { Component } from 'react'
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import SearchInput from '../SearchInput';
import ContactModal from '../Modal/ContactModal';
import Contact from '../Contact/Contact';
import {styles} from './TogglableMenu.style';
import {withStyles} from '@material-ui/core';

class TogglableMenu extends Component{
  state = {
    showModal:false,
  }
  onKeyDownHandler = query => {
    this.props.handleKeyDown(query);
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render(){
    const {classes} = this.props
    return (
      <div className={classes.toggleMenu}>
      <ul className={classes.categories}>
        {(this.props.categories).map(category => (
          <li key={uuid()}>
          <Link 
            to={`/category/${category}`}
            value={category}
            key={uuid()} 
            className={classes.category} 
          >
            {category}
          </Link>
          </li>
        ))}
      </ul>
      <div className={classes.searchInput}>
        <SearchInput 
          handleKeyDown={this.onKeyDownHandler}
        />
      </div>
      <div className={classes.contactUs}>
        <ContactModal show={this.state.showModal} handleClose={this.hideModal}>
          <Contact />
        </ContactModal>
        
        <button 
          type="button"
          onClick={() =>this.showModal()}
          className={classes.contactButton}
        >
          Contact us
        </button>
      </div>
    </div>
    )
  }

}

export default withStyles(styles)(TogglableMenu);