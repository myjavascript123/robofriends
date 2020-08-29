import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
       super();
       this.state = {
           robots:[],
           searchText:''
       } 
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then(results => this.setState({ robots:results })) 
    }

    onSearchChange = (event) => {
        this.setState({searchText:event.target.value});
    }

    render(h) {
        const {robots,searchText} = this.state;
        const searchResults = robots.filter((user)=> {
            return user.name.toLowerCase().includes(searchText.toLowerCase());
        })
        return !robots.length ? <h1>Loading...</h1>:(
            <div className="tc">
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={searchResults} />    
                </Scroll>
            </div>
        );    
    }
}

export default App;
