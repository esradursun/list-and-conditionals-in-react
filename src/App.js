import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }


  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <h1>Hi, This is a simple of how to use arrays and list methods in React App </h1>
        <p>Type a string below</p>
        <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
        {charList.length > 0 ? <p>You can click and delete the letter</p> : <p></p>}
      </div>
    );
  }
}

export default App;
