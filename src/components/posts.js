import React from 'react';
import _ from 'lodash';
import PostItem from './post-item';

export default class Posts extends React.Component {
    constructor(props) {
      super(props);
    }


    showDetails() {
        return _.map(this.props.details.posts, (detail, index) => <PostItem key={index} {...detail}/>);
    }

    render() {
        return (
            <div className='postContainer'>
                {this.showDetails()}
            </div>
        );
    }
}
