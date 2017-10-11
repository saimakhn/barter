import React from 'react';
import Posts from './posts';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: 'tile'
        };
        this.showDetails = this.showDetails.bind(this);
    }

    showTile() {
        return (
            <div className='tile' onClick={()=>this.setModuleState('details')}>
                <span className=''>
                    {this.props.type}
                </span>
            </div>
        )
    }

    setModuleState(state) {
        this.setState (
          {
            module : state 
          }
        );
    }

    showDetails() {
        return <Posts details={this.props}/>  
    }

    showModule() {
        const module = this.state.module;
        switch (module) {
          case 'tile':
            return this.showTile()
          break;

          case 'details':
            return this.showDetails()
          break;  
        }
    }

    render() {
        return (
            <div className='tileContainer'>
                {this.showModule()}  
            </div>  
        );
    }
}
