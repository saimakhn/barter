import React from 'react';
import Tile from './tile';
import _ from 'lodash';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            module: 'showPost'
        };
    }

	showPost() {
        return _.map(this.props.tasklist, (task, index) => <Tile key={index} {...task}/>);
    }

    createPost() {
        
    }

    showModule() {
        const module = this.state.module;
        switch (module) {
          case 'showPost':
            return this.showPost()
          break;

          case 'createPost':
            return this.createPost()
          break;  
        }
    }

    render() {
        return (
        	<div className='home'>
                {this.showModule()}
            </div>
        	
        );
    }
}
