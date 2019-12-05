import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Table from './table/table.component';
import Form from './form/form.component';

class App extends React.Component {
  
  state = {
    characters: [
      {
        name: 'Shirley',
        job: 'Developer'
      }
    ]
  }

  removeCharacter = index => {
    const { characters }  = this.state;
  
    this.setState({ //update state
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <br/>
        <Table characterData={this.state.characters} 
               removeCharacter={this.removeCharacter}/>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));