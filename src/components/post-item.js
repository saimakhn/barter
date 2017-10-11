import React from 'react';

export default class PostItem extends React.Component {
    constructor(props) {
      super(props);
    }
   
   getDate() {
        const date = new Date();
        return date;
    }

    render() {
        return (
            <div className='post'>
                <h1 className="postTitle">
                    {this.props.title}
                </h1>
                <div className="postDetails">
                    {this.props.note}
                </div>
                <span className="owner">
                    {this.props.owner}
                </span>
                <span className="date">
                    {this.props.date}
                </span>               
            </div>
        );
    }
}
