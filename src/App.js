import React from "react";
import "./styles.css";

import { CardList } from "./components/card-list.component";
import { SearchBox } from "./components/search-box.component";

class App extends React.Component {
  monsters = [];

  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      async (response) => {
        let users = await response.json();

        this.monsters = users;
        this.setState({ monsters: users });
      }
    );
  }

  onTextChanged = (searchText) => {
    let filteredMonsters = this.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );

    this.setState({
      monsters: filteredMonsters
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder={"Search monsters"}
          onTextChanged={this.onTextChanged}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
