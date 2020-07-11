import React, {Component} from 'react';

class Posts extends Component{
    render(){
        return (
            <div>
                {this.props.query}
                posts page
            </div>
        )
    }
}

export default Posts;