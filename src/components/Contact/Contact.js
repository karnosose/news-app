import React from 'react';

import {styles} from './Contact.style';
import {withStyles} from '@material-ui/core';

class Contact extends React.Component{

  state = {
    fields: {
      name: '',
      email: '',
      message: ''
    },
    errors: {},
  }

handleValidation(){
 const fields = this.state.fields;
 const errors = {};
 let formIsValid = true;

 if(!fields["name"]){
    formIsValid = false;
    errors["name"] = "Cannot be empty";
 }

 if(typeof fields["name"] !== "undefined"){
    if(!fields["name"].match(/^[a-zA-Z]+$/)){
       formIsValid = false;
       errors["name"] = "name shouldn't be empty and  can contain only letters";
    }        
 }

 if(!fields["email"]){
    formIsValid = false;
    errors["email"] = "Email Can't be empty";
 }

 if(typeof fields["email"] !== "undefined"){
    let lastAtPos = fields["email"].lastIndexOf('@');
    let lastDotPos = fields["email"].lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
       formIsValid = false;

       errors["email"] = "Email is not valid";
     }
  }  
  if(!fields["message"]){
    formIsValid = false;
    errors["message"] = "message can't be empty";
 }

this.setState({...this.state, errors: errors});
return formIsValid;
}

  handleClose = e => {
    e.preventDefault();
    this.props.handleClose();
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.handleValidation()){
      alert('message is sent');
      this.props.handleClose();

   }else{
    console.log(this.state.errors)
   }
  }
  render(){
    const {classes} = this.props;

    return (
        <form className={classes.contactForm}>
          <div className={classes.name}>
            <input 
              type='text' 
              placeholder="name"
              onChange={e => 
                this.setState({
                  ...this.state, 
                  errors: {...this.state.errors, name:''}, 
                  fields: {
                    ...this.state.fields, 
                    name:e.target.value
                  }}
                )}
            ></input>
            <div className={classes.errors}>{this.state.errors.name && this.state.errors.name  }</div>
          </div>
          <div className={classes.email}>
            <input 
              type='email' 
              placeholder='email'
              onChange={e => 
                this.setState({
                  ...this.state, 
                  errors: {...this.state.errors, email:''}, 
                  fields: {
                    ...this.state.fields, 
                    email:e.target.value
                  }}
                )}

            ></input>
              <div className={classes.errors}>{this.state.errors.email && this.state.errors.email  }</div>

          </div>
          <div className={classes.message}>
            <textarea 
              placeholder="type your message"
              onChange={e => 
                this.setState({
                  ...this.state, 
                  errors: {...this.state.errors, message:''}, 
                  fields: {
                    ...this.state.fields, 
                    message:e.target.value
                  }}
                )}
  
            ></textarea>
              <div className={classes.errors}>{this.state.errors.message && this.state.errors.message  }</div>

          </div>
          <div className={classes.modalButtons}>
            <button 
              className={classes.close} 
              type='button' 
              onClick={e => this.handleClose(e)}
            >
              Close</button>
            <button className={classes.send} type='button' onClick={e => this.handleSubmit(e)}>Send</button>
          </div>
        </form>
        
    )
  }
}

export default withStyles(styles)(Contact)