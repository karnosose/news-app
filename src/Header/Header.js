import React, {Component} from 'react';

import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

class Header extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.header}>
                header
            </div>
        )
    }
}

export default withStyles(styles)(Header);