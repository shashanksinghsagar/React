import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchfilter: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {
      this.setState(() => {
        return { monsters: user};
      })
    });
  }
  onSearchChange = (event) => {
    this.setState({ searchfilter: event.target.value});
  };

  render() {
    const { monsters, searchfilter} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfilter.toLowerCase()));

    return (
      <div className='App'>
        <SearchBox
          className={"monster-search-box"}
          onChangeHandler={onSearchChange}
          placeholder={'Search Monsters'}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;



