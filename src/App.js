import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''

    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ movies: users }))

  }
  render() {
    const { movies, searchField } = this.state;
    const filterMovies = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder='search movies' handleChange={e => this.setState({ searchField: e.target.value }) } />
        <CardList movies={filterMovies} />



      </div>
    );
  }
}

export default App;
