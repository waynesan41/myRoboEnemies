import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robots';
import  Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robotState: [],
            searchfieldState: ''
        }
        // console.log('constructor 1')
    }
    
    componentDidMount() {
        // console.log('componentDidMount');
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(jsonData => this.setState({ robotState: jsonData}))
    }
    onSearchChange123 = (event) => {
        this.setState({searchfieldState: event.target.value});
    }


    render() {
        const { robotState, searchfieldState } = this.state;
        const filteredRobots = robotState.filter(robots => {
            return robots.name.toLowerCase().includes(searchfieldState.toLowerCase());
        })
        return !robotState.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboEnemies</h1>
                <SearchBox searchChange={this.onSearchChange123}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    } //End of Render()
}// App Component END

export default App;