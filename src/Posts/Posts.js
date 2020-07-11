import React, {Component} from 'react';
import SearchedPosts from '../SearchedPosts/SearchedPosts'


class Posts extends Component{
    render(){
        return (
            <div>
                {this.props.match.params.q}
                {/* {this.props.query.length > 0 ? (
                    <SearchedPosts query={this.props.query} />
                ) : (
                    <div>posts page</div>
                )} */}
                jjj
            </div>
        )
    }
}

export default Posts;