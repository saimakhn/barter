import React from 'react';
import Home from './home';
import Login from './login';

const tasks = [
    {
        type: 'Buy',
        count: 0,
        posts: [
            {
                title: 'Buy car',
                owner: 'saima',
                note: 'agsfhgajfahsgdjfa',
                date: '1/1/2017'
            },
            {
                title: 'Buy house',
                owner: 'neeru',
                note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                date: '2/1/2017'
            }
        ]
    },
    {
        type: 'Sell',
        count: 0,
        posts: [
            {
                title: 'Selling car',
                owner: 'saima',
                note: 'agsfhgajfahsgdjfa',
                date: '3/1/2017'
            },
            {
                title: 'Selling house',
                owner: 'neeru',
                note: 'gdfjgsafdgtasuydfgtruasdfusdaf',
                date: '1/6/2017'
            }
        ]
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: tasks,
            module: 'login'
        };
    }

    setModuleState(state) {
        this.setState (
          {
            module : state 
          }
        );
    }

    showModule() {
        const module = this.state.module;
        switch (module) {
          case 'login':
            return this.showLogin()
          break;

          case 'home':
            return this.showHome()
          break;

          case 'chat':
            return this.showChat()
          break;   
        }
    }

    showHeader() {
        return (<Header title={this.state.module}/>)
    }

    showHome() {
        return (<Home changeModule={this.setModuleState.bind(this)} tasklist={this.state.tasks}/>)
    }

    showLogin() {
        return (<Login changeModule={this.setModuleState.bind(this)}/>)
        
    }

    showChat() {
        
        
    }

    render() {
        return (
            <div className='app'>
                <h1 className='header'>{this.state.module}</h1> 
                {this.showModule()}    
            </div>
        );
    }
}
